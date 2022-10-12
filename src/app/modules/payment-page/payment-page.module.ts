import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './components/payment/payment.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class PaymentPageModule { }
