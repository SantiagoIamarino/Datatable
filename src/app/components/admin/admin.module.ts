import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ADMIN_ROUTES } from './admin.routes';
import { AdminComponent } from './admin.component';
import { TurnosComponent } from './turnos/turnos.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';



@NgModule({
  declarations: [
    AdminComponent,
    TurnosComponent
  ],
  imports: [
    CommonModule,
    ADMIN_ROUTES,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ]
})
export class AdminModule { }
