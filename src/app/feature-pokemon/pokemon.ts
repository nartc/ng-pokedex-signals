import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    standalone: true,
    templateUrl: './pokemon.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { class: 'pokemon' },
})
export default class Pokemon {}
