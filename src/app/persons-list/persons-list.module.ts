import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsListComponent } from './persons-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PersonsListComponent],
  imports: [CommonModule, MatTableModule, MatIconModule, RouterModule],
  exports: [PersonsListComponent],
})
export class PersonsListModule {}
