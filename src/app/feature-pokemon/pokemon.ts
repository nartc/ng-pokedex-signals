import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { injectPokemonsState } from '../data-access-pokemons/pokemons-state';

@Component({
    standalone: true,
    templateUrl: './pokemon.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [JsonPipe],
    host: { class: 'pokemon' },
})
export default class Pokemon {
    protected state = injectPokemonsState();

    @Input() set id(id: string) {
        this.state.select(+id);
    }
}
