import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonsFilter } from './ui/pokemons-filter/pokemons-filter';
import { PokemonsList } from './ui/pokemons-list/pokemons-list';
import { PokemonsSearch } from './ui/pokemons-search/pokemons-search';

@Component({
    standalone: true,
    templateUrl: './pokemons.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { class: 'pokemons' },
    imports: [RouterOutlet, PokemonsSearch, PokemonsFilter, PokemonsList],
})
export default class Pokemons {}
