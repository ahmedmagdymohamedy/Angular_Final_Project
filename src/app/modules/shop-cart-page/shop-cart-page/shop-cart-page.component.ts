import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-shop-cart-page',
  templateUrl: './shop-cart-page.component.html',
  styleUrls: ['./shop-cart-page.component.scss']
})
export class ShopCartPageComponent implements OnInit {

  constructor(private server:ServerService) { }
  carItemList:any[]=[];





  ngOnInit(): void {
  this.server.getOrdersBYId(3).subscribe((data)=>{
    this.carItemList = data
    console.log(this.carItemList)
  })  

}
}
