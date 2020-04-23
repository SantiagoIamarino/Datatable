import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from './pages.routes';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    PAGES_ROUTES
  ]
})
export class PagesModule { }
