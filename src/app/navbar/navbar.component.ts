import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService: AuthService, private router: Router) { }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']); // Assurez-vous que cette route est correcte
    }).catch((error: any) => {
      console.error('Logout error:', error);
    });
  }

  
}
