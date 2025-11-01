import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { ManageUsers } from './manage-users/manage-users';
import { authGuard } from 'src/app/core/guards/auth-guard';
import { adminGuard } from 'src/app/core/guards/admin-guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path:'admin-dashboard',component:AdminDashboard, canActivate:[adminGuard]},
  { path:'manage-users',component:ManageUsers,canActivate:[adminGuard]},
  { path:'profile',component:ProfileComponent,canActivate:[authGuard]},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class UserRoutingModule { }
