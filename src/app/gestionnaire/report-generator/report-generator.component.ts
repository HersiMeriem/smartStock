import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service'; 
@Component({
  selector: 'app-report-generator',
  templateUrl: './report-generator.component.html',
  styleUrls: ['./report-generator.component.css']
})
export class ReportGeneratorComponent implements OnInit {
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
    this.dbService.getStocks().subscribe(stocks => {
        this.stocks = stocks;
    });
}

loadOrders(): void {
    this.dbService.getOrders().subscribe(orders => {
        this.orders = orders;
    });
}

loadSuppliers(): void {
    this.dbService.getSuppliers().subscribe(suppliers => {
        this.suppliers = suppliers;
    });
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
    // Génère un rapport sur les stocks
    return this.stocks.map(stock => {
      return `Product: ${stock.productName}, Quantity: ${stock.quantity}`;
    }).join('\n');
  }

  generateOrderReport(): string {
    // Génère un rapport sur les commandes
    return this.orders.map(order => {
      return `Order ID: ${order.id}, Status: ${order.status}, Total: ${order.totalAmount}`;
    }).join('\n');
  }

  generateSupplierReport(): string {
    // Génère un rapport sur les fournisseurs
    return this.suppliers.map(supplier => {
      return `Supplier: ${supplier.name}, Contact: ${supplier.contact}`;
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
