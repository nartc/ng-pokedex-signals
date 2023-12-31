import { NgFor, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pokemon } from 'pokenode-ts';
import { PokemonType } from '../pokemon-type/pokemon-type';

@Component({
    selector: 'app-pokemon-card',
    standalone: true,
    templateUrl: './pokemon-card.html',
    host: { class: 'pokemon-card contents' },
    imports: [NgFor, NgOptimizedImage, TitleCasePipe, PokemonType, RouterLink],
})
export class PokemonCard {
    @Input({ required: true }) pokemon!: Pokemon;
}
