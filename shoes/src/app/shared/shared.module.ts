import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './components/navbar/navbar';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ Navbar],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[ Navbar,RouterModule]
})
export class SharedModule { }
