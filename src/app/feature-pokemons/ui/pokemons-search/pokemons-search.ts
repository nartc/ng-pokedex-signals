import { Component, EventEmitter, Output } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';

@Component({
    selector: 'app-pokemons-search',
    standalone: true,
    template: `
        <div class="join h-16 w-full rounded-2xl bg-white shadow-lg">
            <input
                #input
                type="text"
                placeholder="Search your Pokemon!"
                class="input-ghost input join-item h-full w-full focus:outline-offset-0"
                (keyup.enter)="onSubmit(input)"
            />
            <div class="flex h-16 w-16 items-center justify-center">
                <button
                    class="flex h-10 w-10 scale-100 items-center justify-center bg-[#EC6057] shadow-md shadow-[#EC6057] transition-transform hover:scale-105"
                    type="button"
                    (click)="onSubmit(input, true)"
                >
                    <svg-icon
                        [key]="input.value ? 'close' : 'pokeball'"
                        [width]="input.value ? '60%' : '100%'"
                        [height]="input.value ? '60%' : '100%'"
                        color="white"
                    />
                </button>
            </div>
        </div>
    `,
    imports: [SvgIconComponent],
    host: { class: 'contents' },
})
export class PokemonsSearch {
    @Output() search = new EventEmitter<string>();

    onSubmit(inputElement: HTMLInputElement, canClear = false) {
        if (canClear && !!inputElement.value) {
            inputElement.value = '';
        }
        this.search.emit(inputElement.value);
    }
}
