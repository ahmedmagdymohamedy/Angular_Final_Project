import { ServerService } from 'src/app/services/server.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  orders: any = [];
  total: number = 0;

  constructor(private formBulider: FormBuilder, private server: ServerService) { }

  paymentForm = this.formBulider.group({
    fullName: ['', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ],
    ],
    addressAll: this.formBulider.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
    }),
    cardName: ['', Validators.required],
    cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
    expMonth: ['', [Validators.required, Validators.pattern('^[0-9]{2}$')]],
    expYear: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
    cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
  });

  get fullName() {
    return this.paymentForm.get('fullName');
  }

  get email() {
    return this.paymentForm.get('email');
  }

  get address() {
    return this.paymentForm.get('addressAll')?.get('address');
  }

  get city() {
    return this.paymentForm.get('addressAll')?.get('city');
  }

  get state() {
    return this.paymentForm.get('addressAll')?.get('state');
  }

  get zipCode() {
    return this.paymentForm.get('addressAll')?.get('zipCode');
  }

  get cardName() {
    return this.paymentForm.get('cardName');
  }

  get cardNumber() {
    return this.paymentForm.get('cardNumber');
  }

  get expMonth() {
    return this.paymentForm.get('expMonth');
  }

  get expYear() {
    return this.paymentForm.get('expYear');
  }

  get cvv() {
    return this.paymentForm.get('cvv');
  }

  ngOnInit(): void {

    this.server.getOrdersBYUserId(3).subscribe(e => {
      this.orders = e;
      this.reCalculateTotal()
    })

  }

  reCalculateTotal() {
    this.total = 0;
    for (let i = 0; i < this.orders.length; i++) {
      this.total += this.orders[i].product.product.price;
    }
  }
}
