import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/gestionnaire/database.service'; 

@Component({
  selector: 'app-inventory-reports',
  templateUrl: './inventory-reports.component.html',
  styleUrls: ['./inventory-reports.component.css']
})
export class InventoryReportsComponent implements OnInit {
  
  stocks: any[] = [];
  orders: any[] = [];
  suppliers: any[] = [];
  selectedReport: string = 'stocks'; // Rapport par défaut

  constructor(private dbService: DatabaseService) {}

  ngOnInit(): void {
    this.loadStocks();
    this.loadOrders();
    this.loadSuppliers();
  }

  loadStocks(): void {
    this.dbService.getStocks().subscribe(
      stocks => {
        this.stocks = stocks;
      },
      error => {
        console.error('Error loading stocks:', error);
      }
    );
  }

  loadOrders(): void {
    this.dbService.getOrders().subscribe(
      orders => {
        this.orders = orders;
      },
      error => {
        console.error('Error loading orders:', error);
      }
    );
  }

  loadSuppliers(): void {
    this.dbService.getSuppliers().subscribe(
      suppliers => {
        this.suppliers = suppliers;
      },
      error => {
        console.error('Error loading suppliers:', error);
      }
    );
  }

  generateReport(): string {
    switch (this.selectedReport) {
      case 'stocks':
        return this.generateStockReport();
      case 'orders':
        return this.generateOrderReport();
      case 'suppliers':
        return this.generateSupplierReport();
      default:
        return '';
    }
  }

  generateStockReport(): string {
    return this.stocks.map(stock => {
      return `Product: ${stock.productName}, Quantity: ${stock.quantity}`;
    }).join('\n');
  }

  generateOrderReport(): string {
    return this.orders.map(order => {
      return `Order ID: ${order.id}, Product: ${order.productName}, Quantity: ${order.quantity}, Status: ${order.status}`;
    }).join('\n');
  }

  generateSupplierReport(): string {
    return this.suppliers.map(supplier => {
      return `Supplier: ${supplier.name}, Contact: ${supplier.contactInfo}`;
    }).join('\n');
  }

  downloadReport(): void {
    const report = this.generateReport();
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.selectedReport}-report.txt`;
    a.click();
    URL.revokeObjectURL(url); // Libère l'URL après le téléchargement
  }

}
