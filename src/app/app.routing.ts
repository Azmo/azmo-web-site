import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login';
import { HomeComponent } from './home/home';
import { PageNotFoundComponent } from './page.not.found';

const appRoutes: Routes = [
    {
        path: 'login', component: LoginComponent,
    }, {
        path: '',
        component: HomeComponent,
        data: { title: 'AZMO' },
    }, {
        path: '**',
        component: HomeComponent,
        data: { title: 'AZMO' },
    },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
