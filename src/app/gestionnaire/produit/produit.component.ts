import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireDatabase } from '@angular/fire/compat/database';

interface Product {
  id?: string;
  name: string;
  price: number;
  stock: number;
}
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  productForm: FormGroup;
  products: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(
    private fb: FormBuilder,
    private db: AngularFireDatabase,
    private snackBar: MatSnackBar
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  // Load products from Firebase and add IDs manually
  loadProducts() {
    this.db.list<Product>('products').snapshotChanges().subscribe(data => {
      this.products = data.map(item => ({
        id: item.key ?? undefined,
        ...item.payload.val() as Product
      }));
      console.log(this.products); // Vérifiez la console pour les données chargées
    });
  }
  
  // Add or update a product
  saveProduct() {
    if (this.productForm.invalid) return;

    const product: Product = this.productForm.value;

    if (this.selectedProduct && this.selectedProduct.id) {
      // Update existing product
      this.db.list('products').update(this.selectedProduct.id, product)
        .then(() => this.showMessage('Product updated successfully'))
        .catch(() => this.showMessage('Failed to update product'));
    } else {
      // Add new product
      this.db.list('products').push(product)
        .then(() => this.showMessage('Product added successfully'))
        .catch(() => this.showMessage('Failed to add product'));
    }

    this.clearForm();
  }

  // Select a product for editing
  editProduct(product: Product) {
    this.selectedProduct = product;
    this.productForm.patchValue(product);
  }

  // Delete a product
  deleteProduct(product: Product) {
    if (product.id) {
      this.db.list('products').remove(product.id)
        .then(() => this.showMessage('Product deleted successfully'))
        .catch(() => this.showMessage('Failed to delete product'));
    }
  }

  // Reset form
  clearForm() {
    this.selectedProduct = null;
    this.productForm.reset();
  }

  // Show a snackbar message
  private showMessage(message: string) {
    this.snackBar.open(message, 'Close', { duration: 3000 });
  }
}
