import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { FilterPipe } from './filter.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    ProductsComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,

  ]
})
export class ProductsModule { }
