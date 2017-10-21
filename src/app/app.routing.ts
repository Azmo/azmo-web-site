import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login';
import { StartupComponent } from './startup/startup.component';
import { DeveloperComponent } from './developer/developer.component';
import { ContactComponent } from './contact/contact.component';
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
        path: 'startup',
        component: StartupComponent,
        data: { title: 'Startups' },
    }, {
        path: 'developer',
        component: DeveloperComponent,
        data: { title: 'Developers' },
    }, {
        path: 'contact',
        component: ContactComponent,
        data: { title: 'Contact' },
    }, {
        path: '**',
        component: HomeComponent,
        data: { title: 'AZMO' },
    },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
