import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pokemon-type',
    standalone: true,
    templateUrl: './pokemon-type.html',
})
export class PokemonType {
    @Input({ required: true }) type = '';

    get hbTypeClass() {
        return `bg-${this.type}`;
    }
}
