import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ProduitsComponent } from './produit/produit.component';
import { AlertComponent } from './alert/alert.component';
import { OrdersComponent } from './orders/orders.component';
import { InventoryReportsComponent } from './inventory-reports/inventory-reports.component';
import { AiMonitorComponent } from './ai-monitor/ai-monitor.component';
import { UsersComponent } from './users/users.component';
import {IncidentsComponent } from './incidents/incidents.component';

import { NavComponent } from './gestionnaire/nav/nav.component';
import { DashComponent } from './gestionnaire/dash/dash.component';
import { OrderComponent } from './gestionnaire/order/order.component';
import { FournisseurComponent } from './gestionnaire/fournisseur/fournisseur.component';
import { ProduitComponent } from './gestionnaire/produit/produit.component';
import { ReportGeneratorComponent } from './gestionnaire/report-generator/report-generator.component';
import { AiPredictionsComponent } from './gestionnaire/ai-predictions/ai-predictions.component';
import { NavbarrComponent } from './fournisseurs/navbarr/navbarr.component';

import { NavvComponent } from './employer/navv/navv.component';
import { ReceiveProductsComponent } from './employer/receive-products/receive-products.component';
import { PrepareOrdersComponent } from './employer/prepare-orders/prepare-orders.component';
import { VerifyStocksComponent } from './employer/verify-stocks/verify-stocks.component';



const routes: Routes = [
  {path:'', component: LoginComponent },
  {path:'register', component: RegisterComponent },
  {path:'resetpassword', component: ResetpasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'alert', component: AlertComponent },
  { path: 'suppliers', component: SuppliersComponent },
  { path: 'orders', component: OrdersComponent},
  { path: 'users', component: UsersComponent},
  { path: 'inventoryreports', component: InventoryReportsComponent},
  { path: 'aimonitor', component: AiMonitorComponent},
  { path: 'incidents', component: IncidentsComponent},

  { path: 'nav', component: NavComponent},
  { path: 'dash', component: DashComponent},
  { path: 'order', component: OrderComponent},
  { path: 'fournisseur', component: FournisseurComponent},
  { path: 'produit', component: ProduitComponent},
  { path: 'report', component: ReportGeneratorComponent},
  { path: 'ai', component: AiPredictionsComponent},

  { path: 'navbarr', component:NavbarrComponent},

  { path: 'navv', component:NavvComponent},
  { path: 'prepare-orders', component:PrepareOrdersComponent},
  { path: 'receive-products', component:ReceiveProductsComponent},
  { path: 'verify-stocks', component:VerifyStocksComponent},
  





  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
