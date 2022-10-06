import { ServerService } from './../../../services/server.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private server: ServerService) { }

  productID: number = 0;
  product: any = null;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data: ParamMap) => {
      this.productID = parseInt(data.get("id") || "0")
      this.server.getProductByID(this.productID).subscribe(e => {
        console.log(e);
        this.product = e;
      });
    })
  }



}
