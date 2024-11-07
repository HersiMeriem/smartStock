import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthenticated: any;
  isLoginPage() {
  throw new Error('Method not implemented.');
  }
  title = 'SmartStock';
  constructor(private authservice: AuthService) {
    var firebaseConfig = {
      apiKey: "AIzaSyC4fFsFa7cB642eVzuiX351o7Axeiz8QQ4",
      authDomain: "projetinventaire-2969f.firebaseapp.com",
      databaseURL: "https://projetinventaire-2969f-default-rtdb.firebaseio.com",
      projectId: "projetinventaire-2969f",
      storageBucket: "projetinventaire-2969f.appspot.com",
      messagingSenderId: "621490560233",
      appId: "1:621490560233:web:12f9112c8e2d4def082478",
      measurementId: "G-BQPVWSCCL6"
    };

  
    firebase.initializeApp(firebaseConfig);
}

}