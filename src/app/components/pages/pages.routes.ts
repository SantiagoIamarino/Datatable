import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: '', pathMatch: 'full', redirectTo: 'home' },
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild(routes);
