import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit  {

  totalProduits: number = 15;    
  stockBas: number = 3;               
  totalCommandes: number = 4; 
  constructor() { }

  ngOnInit(): void {
   
  }
}
