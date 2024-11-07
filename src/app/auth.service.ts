import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Enlevez les propriétés inutilisées
  // isAuthenticated$: any;
  // afAuth: any;
  // router: any;

  // Injectez AngularFireAuth via le constructeur
  constructor(private afAuth: AngularFireAuth) { }

  // Méthode pour réinitialiser le mot de passe
  resetPassword(email: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afAuth.sendPasswordResetEmail(email)
        .then(() => {
          resolve(true);
          console.log("We've sent you a password reset link");
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // Méthode pour s'inscrire
  signup(email: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password)
        .then(() => {
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // Méthode pour se connecter
  signInUser(email: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then(() => {
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // Méthode pour se déconnecter
  logout(): Promise<void> {
    return this.afAuth.signOut();
  }
}
