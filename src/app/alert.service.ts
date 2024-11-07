import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alerts: Alert[] = [
    { id: 1, message: 'Niveau de stock bas pour le produit XYZ.', type: 'warning' },
    { id: 2, message: 'Erreur de connexion à la base de données.', type: 'error' },
    { id: 3, message: 'Mise à jour de l’inventaire réussie.', type: 'success' }
  ];

  getAlerts(): Observable<Alert[]> {
    return of(this.alerts); // Simule une réponse d'une API
  }

  addAlert(alert: Alert): void {
    this.alerts.push(alert);
  }

  clearAlerts(): void {
    this.alerts = [];
  }
}

export interface Alert {
  id: number;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
}
