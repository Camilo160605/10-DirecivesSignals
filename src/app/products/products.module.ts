import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsPageComponent } from './pages/productsPage/productsPage.component';
import { TableModule } from 'primeng/table';
import { BootstrapPageComponent } from './pages/bootstrap-page/bootstrap-page.component';


@NgModule({
  declarations: [
    ProductsPageComponent,
    BootstrapPageComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
  ]
})
export class ProductsModule { }
