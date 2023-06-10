import { NgFor, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Pokemon } from 'pokenode-ts';

@Component({
    selector: 'app-pokemon-card',
    standalone: true,
    templateUrl: './pokemon-card.html',
    imports: [NgFor, NgOptimizedImage, TitleCasePipe],
    host: { class: 'pokemon-card contents' },
})
export class PokemonCard {
    @Input({ required: true }) pokemon!: Pokemon;
}
