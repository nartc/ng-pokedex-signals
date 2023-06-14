import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { closeIcon } from '@app/svg/close';
import { pokeballIcon } from '@app/svg/pokeball';
import { provideSvgIcons } from '@ngneat/svg-icon';
import { providePokemonClientCacheOptions } from './data-access-pokemons/pokemon-client';

export const appConfig: ApplicationConfig = {
    providers: [
        providePokemonClientCacheOptions(),
        provideRouter([
            {
                path: '',
                providers: [provideSvgIcons([pokeballIcon, closeIcon])],
                loadComponent: () => import('./feature-pokemons/pokemons'),
                loadChildren: () => import('./feature-pokemons/pokemons-routes'),
            },
        ]),
    ],
};
