import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { ProduitsComponent } from './produit/produit.component';
import { AlertComponent } from './alert/alert.component';
import { OrdersComponent } from './orders/orders.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {  MatDatepickerModule } from '@angular/material/datepicker';

import { HttpClientModule } from '@angular/common/http';
import { InventoryReportsComponent } from './inventory-reports/inventory-reports.component';
import { AiMonitorComponent } from './ai-monitor/ai-monitor.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { UsersComponent } from './users/users.component';
import { IncidentsComponent} from './incidents/incidents.component';
import { NavComponent } from './gestionnaire/nav/nav.component';
import { DashComponent } from './gestionnaire/dash/dash.component';
import { OrderComponent } from './gestionnaire/order/order.component';
import { FournisseurComponent } from './gestionnaire/fournisseur/fournisseur.component';
import { ProduitComponent } from './gestionnaire/produit/produit.component';
import { ReportGeneratorComponent } from './gestionnaire/report-generator/report-generator.component';
import { AiPredictionsComponent } from './gestionnaire/ai-predictions/ai-predictions.component';

import { NavbarrComponent } from './fournisseurs/navbarr/navbarr.component';
import { ReceiveProductsComponent } from './employer/receive-products/receive-products.component';
import { NavvComponent } from './employer/navv/navv.component';
import { PrepareOrdersComponent } from './employer/prepare-orders/prepare-orders.component';
import { VerifyStocksComponent } from './employer/verify-stocks/verify-stocks.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetpasswordComponent,
    DashboardComponent,
    AlertComponent,
    NavbarComponent,
    ProduitsComponent,
    SuppliersComponent,
    OrdersComponent,
   OrdersComponent,
   InventoryReportsComponent,
   AiMonitorComponent,
   UsersComponent,
   IncidentsComponent,
   NavComponent,
   DashComponent,
   OrderComponent,
   FournisseurComponent,
   ProduitComponent,
   ReportGeneratorComponent,
   AiPredictionsComponent,
   NavbarrComponent,
   ReceiveProductsComponent,
   NavvComponent,
   PrepareOrdersComponent,
   VerifyStocksComponent,
   ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireModule,
    MatDialogModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatSelectModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatDatepickerModule,
  



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
