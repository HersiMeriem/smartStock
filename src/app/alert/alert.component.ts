import { Component, OnInit } from '@angular/core';
import { AlertService, Alert } from '../alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  alerts: Alert[] = [];
  location: any;

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.alertService.getAlerts().subscribe((alerts: Alert[]) => this.alerts = alerts);
  }

  clearAlerts(): void {
    this.alertService.clearAlerts();
    this.alerts = [];
  }
}
