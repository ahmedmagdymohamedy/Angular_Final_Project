import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StarRateComponent } from './components/star-rate/star-rate.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    StarRateComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCardComponent,
    StarRateComponent,
  ]
})
export class SharedModule { }
