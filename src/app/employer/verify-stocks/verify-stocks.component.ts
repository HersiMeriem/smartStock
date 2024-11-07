
import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-verify-stocks',
  templateUrl: './verify-stocks.component.html',
  styleUrls: ['./verify-stocks.component.css']
})
export class VerifyStocksComponent implements OnInit {
  products: Product[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.inventoryService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  scanProduct(product: Product): void {
    product.countedQuantity += 1;
    this.inventoryService.updateProductCount(product.id, product.countedQuantity);
  }

  reportDiscrepancy(product: Product): void {
    product.discrepancy = product.countedQuantity - product.expectedQuantity;
    this.inventoryService.reportDiscrepancy(product.id, product.discrepancy).then(() => {
      alert(`Écart signalé pour ${product.name}: ${product.discrepancy}`);
    });
  }

  markAsDamaged(product: Product): void {
    product.status = 'damaged';
    this.inventoryService.markAsDamaged(product.id).then(() => {
      alert(`Produit endommagé: ${product.name}`);
    });
  }

  markAsMissing(product: Product): void {
    product.status = 'missing';
    this.inventoryService.markAsMissing(product.id).then(() => {
      alert(`Produit manquant: ${product.name}`);
    });
  }
}
