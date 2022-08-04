import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BillingAddressFormModule } from './billing-address/billing-address-form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { BillingAddressFormComponent } from './billing-address/billing-address-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonsListModule } from './persons-list/persons-list.module';
import { PersonsListComponent } from './persons-list/persons-list.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BillingAddressFormModule,
    NavbarModule,
    PersonsListModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PersonsListComponent,
      },
      {
        path: 'list',
        component: PersonsListComponent,
      },
      {
        path: 'create',
        component: BillingAddressFormComponent,
      },
      {
        path: 'list/:id',
        component: BillingAddressFormComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
