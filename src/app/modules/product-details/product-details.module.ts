import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServerService } from './../../services/server.service';
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ProductDetailsModule {
}
