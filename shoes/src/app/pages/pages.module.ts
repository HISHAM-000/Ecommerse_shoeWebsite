import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';




@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ErrorPageComponent

  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    AboutComponent
  ]
})
export class PagesModule { }
