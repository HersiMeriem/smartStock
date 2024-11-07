import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/gestionnaire/database.service';

export interface Produit {
  id?: string; 
  prix: number;
  quantite: number;
}

@Component({
  selector: 'app-produits',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitsComponent implements OnInit {
  produits: Produit[] = [];
  displayedColumns: string[] = ['nom', 'prix', 'quantite'];

  constructor(private dbService: DatabaseService) {}

  ngOnInit(): void {
    this.loadProduits();
  }

  loadProduits(): void {
    this.dbService.getProduits().subscribe(
      (produits) => {
        this.produits = produits;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  
}