import { Component, inject, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/auth.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.html',
  styleUrls: ['./manage-users.css'],
})
export class ManageUsers implements OnInit{
  private authService=inject(AuthService);
 users!:User[];
   editingUser: User | null = null;
   selectedUser: any = null;
 searchTerm: string = '';
  ngOnInit(): void {
    this.loadUsers();
  }
 loadUsers(){
  const users = localStorage.getItem('users');
  this.users = users?JSON.parse(users) : [];
 }
 get filteredUsers(): User[] {
    const term = this.searchTerm.toLowerCase();
    return this.users.filter(
      (u) =>
        u.fullName.toLowerCase().includes(term) ||
        u.email.toLowerCase().includes(term)
    );
  }
viewUser(user: any) {

  this.selectedUser = {
    ...user,
    orders: [
      { orderId: 101, productName: 'Nike Air Zoom', quantity: 1, price: 199 },
      { orderId: 102, productName: 'Adidas Ultraboost', quantity: 2, price: 179 },
    ],
  };
}

closeView() {
  this.selectedUser = null;
}
deleteUser(email?: string) {
  if (!email) return;

  const confirmDelete = confirm('Are you sure you want to delete this user?');
  if (!confirmDelete) return;

  this.users = this.users.filter(u => u.email !== email);
  localStorage.setItem('users', JSON.stringify(this.users));

  alert('User deleted successfully!');
}
    editUser(user: User) {

    this.editingUser = { ...user };
  }

  cancelEdit() {
    this.editingUser = null;
  }
  
  saveUser() {
    if (!this.editingUser) return;

    const index = this.users.findIndex((u) => u.id === this.editingUser!.id);
    if (index !== -1) {
      this.users[index] = this.editingUser;
      localStorage.setItem('users', JSON.stringify(this.users));
    }
    this.editingUser = null;
  }
}
