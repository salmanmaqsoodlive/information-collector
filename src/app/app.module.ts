import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BillingAddressFormModule } from './billing-address/billing-address-form.module';
import { ReactiveFormsModule } from '@angular/forms';
// import { BillingAddressFormComponent } from './billing-address/billing-address-form.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BillingAddressFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
