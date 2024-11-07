import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../incident.service';
import { Incident } from '../incident.model';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css'],
})
export class IncidentsComponent implements OnInit {
  newIncident: Incident = {
    title: '',
    description: '',
    status: 'en cours',
    dateReported: new Date(),
  };
  incidents: Incident[] = [];

  constructor(private incidentService: IncidentService) {}

  ngOnInit(): void {
    this.loadOngoingIncidents();
  }

  // Charger les incidents en cours
  loadOngoingIncidents() {
    this.incidentService.getOngoingIncidents().subscribe((data: Incident[]) => {
      this.incidents = data;
    });
  }

  // Signaler un nouvel incident
  reportIncident() {
    this.incidentService.addIncident(this.newIncident).then(() => {
      this.loadOngoingIncidents();
      this.newIncident = {
        title: '',
        description: '',
        status: 'en cours',
        dateReported: new Date(),
      }; // Réinitialiser le formulaire
    });
  }

  closeIncident(key: string | undefined) {
    if (!key) {
      console.error('La clé de l\'incident est indéfinie');
      return; // Arrêter si la clé est indéfinie
    }
  
    this.incidentService.updateIncident(key, { status: 'clôturé' })
      .then(() => {
        console.log('Incident clôturé');
        this.getIncidents(); // Rafraîchir la liste des incidents après clôture
      })
      .catch(error => {
        console.error('Erreur lors de la clôture de l\'incident :', error);
      });
  }
  getIncidents() {
    throw new Error('Method not implemented.');
  }
  
  
}
