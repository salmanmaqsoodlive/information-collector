import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BillingAddressFormComponent } from './billing-address-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BillingAddressFormComponent],
  imports: [
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    CommonModule,
    MatDatepickerModule,
    HttpClientModule,
    // BrowserModule,
  ],
  exports: [BillingAddressFormComponent],
})
export class BillingAddressFormModule {}
