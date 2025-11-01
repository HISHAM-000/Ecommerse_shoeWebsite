import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/auth.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { Cart } from 'src/app/core/services/cart';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar implements OnInit{
  public auth=inject(AuthService)
  private route=inject(Router);
  private cartService = inject(Cart);

  count = 0;

  ngOnInit() {

    this.cartService.cart$.subscribe(items => {
      this.count = items.reduce((acc, item) => acc + (item.quantity || 1), 0);
    });
  }
login = this.auth.getLoginStatus()
 user = this.auth.getLoggedInUser()
//  count = this.cartService.getcount()
  logout() {
    localStorage.removeItem('loggedInUser');
    this.route.navigate(['/auth/login']);
  }
  
}
