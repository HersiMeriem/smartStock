import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Incident } from './incident.model';

@Injectable({
  providedIn: 'root',
})
export class IncidentService {
  getIncidents() {
    throw new Error('Method not implemented.');
  }
  private incidentsRef = this.db.list<Incident>('/incidents');

  constructor(private db: AngularFireDatabase) {}

 // Fonction pour ajouter un incident
 addIncident(incident: any) {
  const newIncidentRef = this.db.list('/incidents').push(incident);
  return newIncidentRef.then(ref => {
    return this.db.object(`/incidents/${ref.key}`).update({ key: ref.key });
  });
}
   // Fonction pour mettre à jour un incident (comme clôturer)
  updateIncident(key: string, data: any) {
    return this.db.object(`/incidents/${key}`).update(data);
  }
  
  // Récupérer les incidents en cours
  getOngoingIncidents(): Observable<Incident[]> {
    return this.db
      .list<Incident>('/incidents', ref => ref.orderByChild('status').equalTo('en cours'))
      .valueChanges();
  }

  closeIncident(incidentKey: string): Promise<void> {
    return this.db.object(`/incidents/${incidentKey}`).update({ status: 'clôturé' });
  }
}
