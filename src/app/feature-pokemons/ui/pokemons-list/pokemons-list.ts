import { NgFor } from '@angular/common';
import { Component, Input, TrackByFunction } from '@angular/core';
import { Pokemon } from 'pokenode-ts';
import { PokemonCard } from '../pokemon-card/pokemon-card';

@Component({
    selector: 'app-pokemons-list',
    standalone: true,
    templateUrl: './pokemons-list.html',
    imports: [PokemonCard, NgFor],
    host: {
        class: 'pokemons-list grid gap-4 grid-cols-3',
    },
})
export class PokemonsList {
    @Input({ required: true }) pokemons: Pokemon[] = [];

    protected trackById: TrackByFunction<Pokemon> = (_, item) => item.id;
}
