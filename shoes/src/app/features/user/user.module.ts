import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { AddressesComponent } from './addresses/addresses.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { ManageUsers } from './manage-users/manage-users';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ProfileComponent,
    AddressesComponent,
    AdminDashboard,
    ManageUsers,
    
   
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports:[RouterModule]
})
export class UserModule { }
