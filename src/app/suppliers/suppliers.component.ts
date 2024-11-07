import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../suppliers.service';
import { Supplier } from '../supplier.model';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  suppliers: Supplier[] = [];
  currentSupplier: Supplier = { name: '', contactEmail: '', phoneNumber: '', address: '', displayInfo: '', id: '' };
  selectedSupplier: Supplier | null = null;

  constructor(private suppliersService: SuppliersService) {}

  ngOnInit(): void {
    this.loadSuppliers();
  }

  loadSuppliers(): void {
    this.suppliersService.getSuppliers().subscribe((data: Supplier[]) => {
      this.suppliers = data;
    });
  }

  onSubmit(): void {
    if (this.selectedSupplier) {
      // Mettre à jour un fournisseur existant
      if (this.currentSupplier.id) {
        this.suppliersService.updateSupplier(this.currentSupplier).then(() => {
          this.loadSuppliers();
          this.clearForm();
        }).catch(error => console.error('Error updating supplier:', error));
      } else {
        console.error('Supplier ID is missing for update');
      }
    } else {
      // Ajouter un nouveau fournisseur
      this.suppliersService.addSupplier(this.currentSupplier).then(() => {
        this.loadSuppliers();
        this.clearForm();
      }).catch(error => console.error('Error adding supplier:', error));
    }
  }

  editSupplier(supplier: Supplier): void {
    this.selectedSupplier = supplier;
    this.currentSupplier = { ...supplier };
  }

  deleteSupplier(id: string | undefined): void {
    if (id) {
      this.suppliersService.deleteSupplier(id).then(() => {
        console.log(`Supplier with ID ${id} deleted`);
        this.loadSuppliers();
      }).catch(error => console.error('Error deleting supplier:', error));
    } else {
      console.error('Supplier ID is missing for deletion');
    }
  }

  clearForm(): void {
    this.currentSupplier = { name: '', contactEmail: '', phoneNumber: '', address: '', displayInfo: '', id: '' };
    this.selectedSupplier = null;
  }

  trackById(index: number, supplier: Supplier): string {
    return supplier.id!;
  }
}
