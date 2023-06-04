import { Component } from '@angular/core';
import { PokemonCard } from '../pokemon-card/pokemon-card';

@Component({
    selector: 'app-pokemons-list',
    standalone: true,
    templateUrl: './pokemons-list.html',
    imports: [PokemonCard],
})
export class PokemonsList {}
