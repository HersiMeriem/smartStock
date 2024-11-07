import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order, OrderItem } from '../order.model';

@Component({
  selector: 'app-prepare-orders',
  templateUrl: './prepare-orders.component.html',
  styleUrls: ['./prepare-orders.component.css']
})
export class PrepareOrdersComponent implements OnInit {
  pendingOrders: Order[] = [];
  selectedOrder: Order | null = null;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadPendingOrders();
  }

  loadPendingOrders(): void {
    this.orderService.getPendingOrders().subscribe(orders => {
      this.pendingOrders = orders;
    });
  }

  selectOrder(order: Order): void {
    this.selectedOrder = order;
  }

  scanItem(item: OrderItem): void {
    if (item.scanned < item.quantity) {
      item.scanned += 1;
    }
  }

  isOrderReady(): boolean {
    return this.selectedOrder?.items.every(item => item.scanned >= item.quantity) ?? false;
  }

  validateOrderPreparation(): void {
    const currentOrder = this.selectedOrder;  // Utiliser une constante pour simplifier les vérifications

    if (currentOrder && currentOrder.id && currentOrder.items) {
      this.orderService.updateOrderStatus(currentOrder.id, 'prepared').then(() => {
        this.orderService.updateOrderItems(currentOrder.id, currentOrder.items).then(() => {
          alert('La commande a été préparée avec succès.');
          this.selectedOrder = null; // Réinitialise la commande sélectionnée
          this.loadPendingOrders(); // Recharge les commandes en attente
        });
      });
    } else {
      console.error("L'ordre sélectionné, son ID ou ses articles ne sont pas définis.");
    }
  }
}
