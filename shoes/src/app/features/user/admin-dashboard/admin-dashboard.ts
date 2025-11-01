import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css'],
})
export class AdminDashboard {
  private auth=inject(AuthService);
  admin = this.auth.ensureAdminExists();
  users = this.auth.getAllUsers()
  logOut(){
    this.auth.logout()
  }
  isProfileModalOpen = false;

toggleProfileModal() {
  this.isProfileModalOpen = !this.isProfileModalOpen;
}

closeProfileModal() {
  this.isProfileModalOpen = false;
}
}
