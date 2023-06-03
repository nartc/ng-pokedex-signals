import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter([
            {
                path: '',
                loadComponent: () => import('./feature-pokemons/pokemons'),
                loadChildren: () => import('./feature-pokemons/pokemons-routes'),
            },
        ]),
    ],
};
