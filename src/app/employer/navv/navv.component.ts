import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-navv',
  templateUrl: './navv.component.html',
  styleUrls: ['./navv.component.css']
})
export class NavvComponent {
  constructor(private authService: AuthService, private router: Router) { }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']); // Assurez-vous que cette route est correcte
    }).catch((error: any) => {
      console.error('Logout error:', error);
    });
  }
}
