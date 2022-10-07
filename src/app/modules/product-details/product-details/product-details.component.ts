import { ServerService } from './../../../services/server.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private server: ServerService) { }

  productID: number = 0;
  product: any = null;

  isOnWishList: boolean = false;
  isOnCart: boolean = false;

  otherProducts: any[] = [];

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data: ParamMap) => {
      this.productID = parseInt(data.get("id") || "0")
      this.server.getProductByID(this.productID).subscribe(e => {
        console.log(e);
        this.product = e;
      });
    })

    this.server.getProducts().subscribe((e: any[]) => {
      this.otherProducts = e.filter(e => e.id != this.productID);
    });
  }


  toggolToCard() {
    if (!this.isOnCart) {
      this.server.addToCart(3, this.product).subscribe(e => {
        this.isOnCart = true;
      })
    }
  }

  toggolToWishList() {
    if (!this.isOnWishList) {
      this.server.addToWishList(3, this.product).subscribe(e => {
        this.isOnWishList = true;
      })
    }
  }

}
