import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: any[] = [];
  suppliers: any[] = [];
  newOrder: any = {
    productId: '',
    productName: '',
    supplierId: '',
    quantity: 0,
    unitPrice: 0,
    totalAmount: 0,
    status: 'in_progress', // Statut par défaut
    createdAt: new Date().toISOString().split('T')[0], // Date actuelle
    deliveryDate: '', // Initialement vide
  };
  editMode = false;
  editOrderId: string | null = null;

  constructor(private dbService: DatabaseService) {}

  ngOnInit(): void {
    this.loadOrders();
    this.loadSuppliers();
    this.checkOrderStatuses(); // Vérifier les statuts des commandes au chargement
  }

  loadOrders(): void {
    this.dbService.getOrders().subscribe((orders) => {
      this.orders = orders;
      this.checkOrderStatuses(); // Vérifier les statuts après le chargement
    });
  }

  loadSuppliers(): void {
    this.dbService.getSuppliers().subscribe((suppliers) => {
      this.suppliers = suppliers;
    });
  }

  checkOrderStatuses(): void {
    const today = new Date();
    this.orders.forEach(order => {
      if (new Date(order.deliveryDate) < today && order.status !== 'received') {
        order.status = 'canceled'; // Annuler la commande si la date de livraison est dépassée
        this.dbService.updateOrder(order.id, order); // Mettre à jour le statut dans la base de données
      }
    });
  }

  calculateTotalAmount(): number {
    return this.newOrder.quantity * this.newOrder.unitPrice;
  }

  addOrUpdateOrder(): void {
    if (this.editMode && this.editOrderId) {
      this.dbService.updateOrder(this.editOrderId, this.newOrder).then(() => {
        this.resetOrderForm();
        this.loadOrders();
      }).catch(error => {
        console.error('Error updating order:', error); // Log des erreurs
      });
    } else {
      this.dbService.addOrder(this.newOrder).then(() => {
        this.resetOrderForm();
        this.loadOrders();
      }).catch(error => {
        console.error('Error adding order:', error); // Log des erreurs
      });
    }
  }

  editOrder(order: any): void {
    this.newOrder = { ...order };
    this.editOrderId = order.id;
    this.editMode = true;
  }

  cancelEdit(): void {
    this.resetOrderForm();
  }

  deleteOrder(id: string): void {
    if (confirm('Are you sure you want to delete this order?')) {
      this.dbService.deleteOrder(id)
        .then(() => {
          console.log(`Order with ID ${id} deleted successfully`);
          this.loadOrders(); // Recharger les commandes après suppression
        })
        .catch(error => {
          console.error('Error deleting order:', error); // Log des erreurs
        });
    }
  }

  resetOrderForm(): void {
    this.newOrder = {
      productId: '',
      productName: '',
      supplierId: '',
      quantity: 0,
      unitPrice: 0,
      totalAmount: 0,
      status: 'in_progress', // Réinitialiser le statut
      createdAt: new Date().toISOString().split('T')[0],
      deliveryDate: '',
    };
    this.editMode = false;
    this.editOrderId = null;
  }

  getSupplierName(supplierId: string): string {
    const supplier = this.suppliers.find(s => s.id === supplierId);
    return supplier ? supplier.name : 'Unknown';
  }

  getOrderStatusClass(status: string): string {
    switch (status) {
      case 'in_progress':
        return 'status-in-progress';
      case 'received':
        return 'status-received';
      case 'canceled':
        return 'status-canceled';
      default:
        return '';
    }
  }
  
}
