import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalProduits: number = 15;    
  stockBas: number = 3;               
  totalCommandes: number = 4;     

  constructor() { }

  ngOnInit(): void {
   
  }
}
