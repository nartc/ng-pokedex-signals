import { Injector, NgZone, computed, effect, signal, untracked } from '@angular/core';
import { Pokemon } from 'pokenode-ts';
import { Observable } from 'rxjs';
import { createInjectionToken } from '../shared-utils/injection-token';
import { POKEMONS_SERVICE, type PokemonsService } from './pokemons-service';

function pokemonsStateFactory(service: PokemonsService, injector: Injector, zone: NgZone) {
    // NOTE: use number that can be divided by 3 so grid is always filled
    const OFFSET_INCREMENT = 21;

    // TODO: maybe use entity for better look up
    const pokemons = signal<Pokemon[]>([]);
    const selected = signal<number>(-1);
    const offset = signal(0);
    const loading = signal(false);
    const total = signal(0);
    const query = signal('');

    return {
        loading: loading.asReadonly(),
        pokemons: computed(() => {
            if (query())
                return pokemons().filter((pokemon) => pokemon.name.toLowerCase().includes(query().toLowerCase()));
            return pokemons();
        }),
        selected: computed(() => {
            const selectedId = selected();
            if (selectedId === -1) return null;
            const pokemon = pokemons().find((pokemon) => pokemon.id === selectedId);
            if (!pokemon) return null;
            return pokemon;
        }),

        init(loadMore$: Observable<number>) {
            loading.set(true);
            service
                .listPokemons()
                .then(({ count, pokemons: result }) => {
                    pokemons.set(result);
                    total.set(count);
                    offset.set(OFFSET_INCREMENT);
                })
                .catch(console.error)
                .finally(() => {
                    loading.set(false);
                });

            effect(
                (onCleanup) => {
                    const loadMoreSubscription = loadMore$.subscribe(() => {
                        zone.run(this.load.bind(this));
                    });
                    onCleanup(loadMoreSubscription.unsubscribe.bind(loadMoreSubscription));
                },
                { injector }
            );
        },
        load() {
            loading.set(true);
            service
                .listPokemons(untracked(offset))
                .then(({ pokemons: result }) => {
                    pokemons.update((prev) => [...prev, ...result]);
                    offset.update((prev) => prev + OFFSET_INCREMENT);
                })
                .catch(console.error)
                .finally(() => {
                    loading.set(false);
                });
        },
        select(id: number | null) {
            selected.set(id ?? -1);
        },
        search(value = '') {
            query.set(value);
        },
    };
}

export const [injectPokemonsState, providePokemonsState] = createInjectionToken(pokemonsStateFactory, {
    isRoot: false,
    deps: [POKEMONS_SERVICE, Injector, NgZone],
});
