import { inject, Injectable } from '@angular/core';
import { User } from '../models/auth.model';
import { Product } from '../models/products.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
private route = inject(Router);
  constructor() { }
  private usersKey="users";
  private adminKey="admin";
  private loggedInKey="loggedInUser";

  loginStatus! :boolean;

  
  signUp(user:User):boolean{
    const users:User[]=JSON.parse(localStorage.getItem(this.usersKey) || '[]');
    if (users.some(u=>u.email===user.email)){
      return false
    }
    const nextId = users.length + 1; 
    const newUser: User = { ...user, id: nextId.toString() };


    users.push(user);
    localStorage.setItem(this.usersKey,JSON.stringify(users))
    return true
   
  }

onLogin(email: string, password: string): boolean {
  const users: User[] = JSON.parse(localStorage.getItem(this.usersKey) || '[]');
  const admin = JSON.parse(localStorage.getItem(this.adminKey) || 'null');


  if (admin && admin.email === email && admin.password === password) {
    localStorage.setItem('loggedInAdmin', JSON.stringify(admin));
    this.loginStatus = true;
    console.log('Hardcoded Admin logged in:', admin);
    return true;
  }

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem(this.loggedInKey, JSON.stringify(user));
    this.loginStatus = true;
    console.log('User logged in:', user);
    if (user.role === 'admin') {
      localStorage.setItem('loggedInAdmin', JSON.stringify(user));
    }

    return true;
  }

  this.loginStatus = false;
  return false;
}
    

getLoginStatus(): boolean {
  const user = localStorage.getItem(this.loggedInKey);
  const admin = localStorage.getItem('loggedInAdmin');
  return !!user || !!admin;
}
getLoggedInUser(): User | null {
  const storedUser = localStorage.getItem(this.loggedInKey);
  return storedUser ? JSON.parse(storedUser) : null;
}
  logout(): void {
    localStorage.removeItem(this.loggedInKey);
    localStorage.removeItem('loggedInAdmin');
    this.route.navigate(['/']);
    this.loginStatus = false; 
  }
  ensureAdminExists(){
  let existingAdmin= JSON.parse(localStorage.getItem(this.adminKey) || 'null');
  if(!existingAdmin){
   const admin={
      name:'Admin',
      email:'admin@gmail.com',
      password:'111111',
      role:'admin'

    }
    localStorage.setItem(this.adminKey,JSON.stringify(admin));
    console.log('Admin crated',admin)
  }
  else{
    console.log('admin already exists',existingAdmin)
  }
  }
 isLoggedInAdmin(): boolean {
  const hardcodedAdmin = localStorage.getItem('loggedInAdmin');
  if (hardcodedAdmin) return true;
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (loggedInUser) {
    const user = JSON.parse(loggedInUser);
    return user.role === 'admin';
  }

  return false;
}
  getAllUsers(): User[] {
    return JSON.parse(localStorage.getItem(this.usersKey) || '[]');
  }
  }



