import { NgIf, NgOptimizedImage } from '@angular/common';
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
    host: { class: 'pokemons grid grid-cols-7 lg:overflow-hidden h-pokemons-container max-h-pokemons-container' },
    imports: [RouterOutlet, PokemonsSearch, PokemonsFilter, PokemonsList, NgIf, NgOptimizedImage],
    providers: [providePokemonsState()],
})
export default class Pokemons {
    protected state = injectPokemonsState();

    ngOnInit() {
        this.state.init();
    }
}
