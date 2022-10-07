import { AppModule } from './../../app.module';
import { NgModule, OnInit } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CommonModule } from '@angular/common';
import { StarRateComponent } from 'src/app/components/star-rate/star-rate.component';



@NgModule({
  declarations: [
    ProductDetailsComponent,
    StarRateComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class ProductDetailsModule {
}
