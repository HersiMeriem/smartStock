
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private db: AngularFireDatabase) {}

  getProducts(): Observable<Product[]> {
    return this.db.list<Product>('products').snapshotChanges().pipe(
      map(actions =>
        actions.map(action => {
          // Créer un objet en séparant id et data, puis combiner les deux en un seul objet
          const data = action.payload.val() as Product;
          const id = action.key ? action.key : ''; // Gérer l'absence de clé
          return { ...data, id };
        })
      )
    );
  }

  updateProductCount(productId: string, countedQuantity: number): Promise<void> {
    return this.db.object(`products/${productId}`).update({ countedQuantity });
  }

  reportDiscrepancy(productId: string, discrepancy: number): Promise<void> {
    return this.db.object(`products/${productId}`).update({ discrepancy });
  }

  markAsDamaged(productId: string): Promise<void> {
    return this.db.object(`products/${productId}`).update({ status: 'damaged' });
  }

  markAsMissing(productId: string): Promise<void> {
    return this.db.object(`products/${productId}`).update({ status: 'missing' });
  }
}
