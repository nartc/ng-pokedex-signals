import { signal } from '@angular/core';
import { Pokemon } from 'pokenode-ts';
import { createInjectionToken } from '../shared-utils/injection-token';
import { POKEMONS_SERVICE, type PokemonsService } from './pokemons-service';

function pokemonsStateFactory(service: PokemonsService) {
    const OFFSET_INCREMENT = 20;

    const pokemons = signal<Pokemon[]>([]);
    const offset = signal(0);
    const loading = signal(false);
    const total = signal(0);

    return {
        loading: loading.asReadonly(),
        pokemons: pokemons.asReadonly(),

        init() {
            service
                .listPokemons()
                .then(({ count, pokemons: result }) => {
                    pokemons.set(result);
                    total.set(count);
                    offset.set(OFFSET_INCREMENT);
                })
                .catch(console.error);
        },
        load() {
            loading.set(true);
            service
                .listPokemons(offset())
                .then(({ pokemons: result }) => {
                    pokemons.update((prev) => [...prev, ...result]);
                    offset.update((prev) => prev + OFFSET_INCREMENT);
                })
                .catch(console.error)
                .finally(() => {
                    loading.set(false);
                });
        },
    };
}

export const [injectPokemonsState, providePokemonsState] = createInjectionToken(pokemonsStateFactory, {
    isRoot: false,
    deps: [POKEMONS_SERVICE],
});
