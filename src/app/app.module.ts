import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// _____________Angular Material Imports____________
import { MatNativeDateModule } from '@angular/material';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {DbMaterialModule} from './material-module';
// __________Components Imports________________
import { AppComponent } from './app.component';
import { DbUsDisbursementHeaderComponent } from './components/db-us-disbursement-header/db-us-disbursement-header.component';
import { DbUsDisbursementDashboardComponent } from './components/db-us-disbursement-dashboard/db-us-disbursement-dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// ______________________Defining Application Routes_____________________
const routes : Routes = [
  { path: 'dashboard', component: DbUsDisbursementDashboardComponent },
  {  
    path: 'issue-management', 
    component: DbUsDisbursementDashboardComponent,
    children: [
      {
        path: 'create-issue',
        component: DbUsDisbursementDashboardComponent,
      },
      {
        path: 'authorize-issues',
        component: DbUsDisbursementDashboardComponent,
      },
      {
        path: 'import-issues',
        component: DbUsDisbursementDashboardComponent,
      }
    ]
  },
  {
    path: 'exception-management', 
    component: DbUsDisbursementDashboardComponent,
    children: [{
      path: 'create-exception',
      component: DbUsDisbursementDashboardComponent,
    }]
  },
  {
    path: 'you-are-lost',
    component: PageNotFoundComponent,
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'you-are-lost', pathMatch: 'prefix' }
];

@NgModule({
  declarations: [
    AppComponent,
    DbUsDisbursementHeaderComponent,
    DbUsDisbursementDashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DbMaterialModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatTableModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);