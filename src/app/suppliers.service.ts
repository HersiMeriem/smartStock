import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Supplier } from './supplier.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {
  private dbPath = '/suppliers';

  constructor(private db: AngularFireDatabase) {}

  getSuppliers(): Observable<Supplier[]> {
    return this.db.list<Supplier>(this.dbPath).valueChanges();
  }

  addSupplier(supplier: Supplier): Promise<void> {
    const id = this.db.createPushId();
    return this.db.object(`${this.dbPath}/${id}`).set({ ...supplier, id });
  }

  updateSupplier(supplier: Supplier): Promise<void> {
    if (!supplier.id) {
      throw new Error('Supplier ID is required for update');
    }
    return this.db.object(`${this.dbPath}/${supplier.id}`).update(supplier);
  }

  deleteSupplier(id: string): Promise<void> {
    return this.db.object(`${this.dbPath}/${id}`).remove();
  }
}
