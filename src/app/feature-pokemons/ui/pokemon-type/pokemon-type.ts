import { Component, Input } from '@angular/core';
import { bgColors, borderColors } from '../../../shared-ui/colors';

@Component({
    selector: 'app-pokemon-type',
    standalone: true,
    template: `
        <span class="font-bold text-white drop-shadow-lg">{{ type }}</span>
    `,
    host: { class: 'block py-1 px-2 rounded border', '[class]': 'hbTypeClass' },
})
export class PokemonType {
    @Input({ required: true }) type = '';

    get hbTypeClass() {
        return `${(bgColors as Record<string, string>)[this.type]} ${
            (borderColors as Record<string, string>)[this.type]
        }`;
    }
}
