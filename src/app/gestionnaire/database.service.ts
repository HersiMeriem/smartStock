import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, catchError } from 'rxjs';
import { Produit } from '../produit/produit.component';

export interface Supplier {
  id?: string; // optional id for supplier
  name: string;
  contactInfo?: string; // Add other relevant fields
}

export interface Order {
  id?: string; // optional id for order
  productId: string;
  productName: string;
  supplierId: string;
  quantity: number;
  unitPrice: number;
  totalAmount: number;
  status: string;
  createdAt: string; // Use string for date or you can use Date type
  deliveryDate?: string; // Optional delivery date
}

export interface Stock {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private suppliersPath = '/suppliers';
  private ordersPath = '/orders';
  private produitsPath = '/produits';
  private stocksPath = '/stocks'; // Assurez-vous que ce chemin est correct

  constructor(private db: AngularFireDatabase) {}

  // CRUD for Suppliers
  getSuppliers(): Observable<Supplier[]> {
    return this.db.list<Supplier>(this.suppliersPath).valueChanges().pipe(
      catchError(error => {
        console.error('Error fetching suppliers:', error);
        throw error; // Re-throw the error for handling in the component
      })
    );
  }

  addSupplier(supplier: Supplier): Promise<void> {
    const supplierRef = this.db.list(this.suppliersPath);
    return supplierRef.push(supplier).then(() => {});
  }

  updateSupplier(id: string, supplier: Supplier): Promise<void> {
    return this.db.object<Supplier>(`${this.suppliersPath}/${id}`).update(supplier);
  }

  deleteSupplier(id: string): Promise<void> {
    return this.db.object<Supplier>(`${this.suppliersPath}/${id}`).remove();
  }

  // CRUD for Orders
  getOrders(): Observable<Order[]> {
    return this.db.list<Order>(this.ordersPath).valueChanges().pipe(
      catchError(error => {
        console.error('Error fetching orders:', error);
        throw error; // Re-throw the error for handling in the component
      })
    );
  }

  addOrder(order: Order): Promise<void> {
    const orderRef = this.db.list(this.ordersPath);
    return orderRef.push(order).then(() => {});
  }

  updateOrder(id: string, order: Order): Promise<void> {
    return this.db.object<Order>(`${this.ordersPath}/${id}`).update(order);
  }

  deleteOrder(id: string): Promise<void> {
    return this.db.object<Order>(`${this.ordersPath}/${id}`).remove();
  }

  // CRUD for Products
  getProduits(): Observable<Produit[]> {
    return this.db.list<Produit>(this.produitsPath).valueChanges().pipe(
      catchError(error => {
        console.error('Error fetching products:', error);
        throw error; // Re-throw the error for handling in the component
      })
    );
  }

  // CRUD for Stocks
  getStocks(): Observable<Stock[]> {
    return this.db.list<Stock>(this.stocksPath).valueChanges().pipe(
      catchError(error => {
        console.error('Error fetching stocks:', error);
        throw error; // Re-throw the error for handling in the component
      })
    );
  }
}
