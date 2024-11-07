// src/app/services/order.service.ts
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order, OrderItem } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private db: AngularFireDatabase) {}

  getPendingOrders(): Observable<Order[]> {
    return this.db.list<Order>('orders', ref => ref.orderByChild('status').equalTo('pending'))
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(action => ({
            ...action.payload.val() as Order, // Utilise le spread operator
            id: action.key || ''              // Ajoute `id` une seule fois
          }))
        )
      );
  }

  updateOrderStatus(orderId: string, status: string): Promise<void> {
    return this.db.object(`orders/${orderId}`).update({ status });
  }

  updateOrderItems(orderId: string, items: OrderItem[]): Promise<void> {
    return this.db.object(`orders/${orderId}/items`).set(items);
  }
}
