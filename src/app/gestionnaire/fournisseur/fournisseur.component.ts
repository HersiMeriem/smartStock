import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  suppliers: any[] = [];

  constructor(private dbService: DatabaseService) {}

  ngOnInit(): void {
    // Consultation des informations des fournisseurs
    this.dbService.getSuppliers().subscribe((suppliers) => {
      this.suppliers = suppliers;
    });
  }
}
