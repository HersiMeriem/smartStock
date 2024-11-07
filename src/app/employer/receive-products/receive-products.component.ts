import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MatTableDataSource } from '@angular/material/table';

interface Product {
  id?: string; 
  code: string;
  name: string;
  quantity: number;
}


@Component({
  selector: 'app-receive-products',
  templateUrl: './receive-products.component.html',
  styleUrls: ['./receive-products.component.css']
})
export class ReceiveProductsComponent implements OnInit {
  newProduct: Product = { code: '', name: '', quantity: 0 };
  products: MatTableDataSource<Product> = new MatTableDataSource();
  displayedColumns: string[] = ['code', 'name', 'quantity', 'actions'];

  constructor(private db: AngularFireDatabase) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  // Fonction pour ajouter un produit
  addProduct() {
    if (this.newProduct.code && this.newProduct.name && this.newProduct.quantity > 0) {
      const productsRef = this.db.list<Product>('products');
      productsRef.push(this.newProduct);
      this.newProduct = { code: '', name: '', quantity: 0 };
    }
  }

  // Fonction pour récupérer les produits depuis Firebase
  fetchProducts() {
    this.db.list<Product>('products').snapshotChanges().subscribe(actions => {
      const productList = actions.map(action => {
        const data = action.payload.val() as Product || {}; // Cast `data` to `Product`
        return {
          id: action.key || undefined,
          code: data.code || '',
          name: data.name || '',
          quantity: data.quantity || 0
        };
      });
      this.products.data = productList;
    });
  }
  
  
  

  // Fonction pour modifier un produit
  editProduct(product: Product) {
    if (product.id) {
      const productRef = this.db.object(`products/${product.id}`);
      productRef.update({ name: product.name, quantity: product.quantity });
    }
  }

  // Fonction pour supprimer un produit
  deleteProduct(id: string) {
    if (id) {
      this.db.object(`products/${id}`).remove();
    }
  }
}
