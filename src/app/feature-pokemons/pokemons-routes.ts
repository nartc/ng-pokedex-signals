import { Routes } from '@angular/router';

export default [
    {
        path: ':id',
        loadComponent: () => import('../feature-pokemon/pokemon'),
    },
] as Routes;
