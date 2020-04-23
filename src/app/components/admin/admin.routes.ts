import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TurnosComponent } from './turnos/turnos.component';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: 'turnos', component: TurnosComponent },
            { path: '', pathMatch: 'full', redirectTo: 'turnos' }
        ]
    },
];

export const ADMIN_ROUTES = RouterModule.forRoot(routes, { useHash: true });
