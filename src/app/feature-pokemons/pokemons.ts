import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { injectPokemonsState, providePokemonsState } from '../data-access-pokemons/pokemons-state';
import { PokemonsFilter } from './ui/pokemons-filter/pokemons-filter';
import { PokemonsList } from './ui/pokemons-list/pokemons-list';
import { PokemonsSearch } from './ui/pokemons-search/pokemons-search';

@Component({
    standalone: true,
    templateUrl: './pokemons.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { class: 'pokemons grid gap-4 grid-cols-3' },
    imports: [RouterOutlet, PokemonsSearch, PokemonsFilter, PokemonsList],
    providers: [providePokemonsState()],
})
export default class Pokemons {
    protected state = injectPokemonsState();

    ngOnInit() {
        this.state.init();
    }
}
