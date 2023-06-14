import { CdkScrollable, ScrollingModule } from '@angular/cdk/scrolling';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { debounceTime, filter, map, pairwise, startWith } from 'rxjs';
import { injectPokemonsState, providePokemonsState } from '../data-access-pokemons/pokemons-state';
import { PokemonsFilter } from './ui/pokemons-filter/pokemons-filter';
import { PokemonsList } from './ui/pokemons-list/pokemons-list';
import { PokemonsSearch } from './ui/pokemons-search/pokemons-search';

@Component({
    standalone: true,
    templateUrl: './pokemons.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { class: 'pokemons grid grid-cols-7 lg:overflow-hidden h-pokemons-container max-h-pokemons-container' },
    imports: [
        RouterOutlet,
        PokemonsSearch,
        PokemonsFilter,
        PokemonsList,
        NgIf,
        NgOptimizedImage,
        ScrollingModule,
        SvgIconComponent,
    ],
    providers: [providePokemonsState()],
})
export default class Pokemons {
    protected state = injectPokemonsState();

    @ViewChild(CdkScrollable, { static: true })
    private scrollable!: CdkScrollable;

    private get loadMore$() {
        return this.scrollable.elementScrolled().pipe(
            map(() => this.scrollable.measureScrollOffset('bottom')),
            startWith(
                this.scrollable.getElementRef().nativeElement.offsetHeight -
                    this.scrollable.getElementRef().nativeElement.offsetTop
            ),
            pairwise(),
            filter(([a, b]) => b - a < 0 && b <= 150),
            debounceTime(250),
            map(() => Date.now())
        );
    }

    ngOnInit() {
        this.state.init(this.loadMore$);
    }
}
