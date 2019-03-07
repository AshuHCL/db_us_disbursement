import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Angular Material Imports
import { MatNativeDateModule } from '@angular/material';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {DbMaterialModule} from './material-module';


import { AppComponent } from './app.component';
import { DbUsDisbursementHeaderComponent } from './components/db-us-disbursement-header/db-us-disbursement-header.component';
import { DbUsDisbursementDashboardComponent } from './components/db-us-disbursement-dashboard/db-us-disbursement-dashboard.component';
import { DbUsDisbursementSidenavComponent } from './components/db-us-disbursement-sidenav/db-us-disbursement-sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    DbUsDisbursementHeaderComponent,
    DbUsDisbursementDashboardComponent,
    DbUsDisbursementSidenavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DbMaterialModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [DbUsDisbursementDashboardComponent, DbUsDisbursementSidenavComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);