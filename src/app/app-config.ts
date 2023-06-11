import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { closeIcon } from '@app/svg/close';
import { pokeballIcon } from '@app/svg/pokeball';
import { provideSvgIcons } from '@ngneat/svg-icon';

export const appConfig: ApplicationConfig = {
    providers: [
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
