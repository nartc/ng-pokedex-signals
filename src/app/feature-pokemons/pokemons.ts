import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    templateUrl: './pokemons.html',
    imports: [RouterOutlet],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { class: 'pokemons' },
})
export default class Pokemons {}
