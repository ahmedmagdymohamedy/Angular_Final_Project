import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {


  @Input() product: any;
  @Input() IsWish:boolean=false;
  @Input() onClickAddToCard:(productID:number)=>void =()=>{};
  @Input() onClickRemove:(productID:number)=>void =()=>{};

  constructor() { }

  ngOnInit(): void {
  }

}
