import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/gestionnaire/database.service'; 

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: any[] = []; // Remplacez la liste statique par un tableau vide

  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.loadOrders(); // Charger les commandes lors de l'initialisation
  }

  loadOrders(): void {
    this.dbService.getOrders().subscribe((orders) => {
      this.orders = orders; // Assignez les commandes récupérées à la propriété orders
    }, error => {
      console.error('Erreur lors du chargement des commandes:', error); // Gestion des erreurs
    });
  }
}
