import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-shop-cart-page',
  templateUrl: './shop-cart-page.component.html',
  styleUrls: ['./shop-cart-page.component.scss']
})
export class ShopCartPageComponent implements OnInit {

  constructor(private server:ServerService) {}
  carItemList:any[]=[];
  total:number=0;
  
  regetOrder(){
    this.server.getOrdersBYId(3).subscribe((data)=>{
      this.carItemList = data
      
      console.log(this.carItemList)
      this.total=0
      this.calcTotal() 
    })  
  }

  ngOnInit(): void 
  {
   this.regetOrder()
  
}



calcTotal(){
    console.log(this.carItemList)
    
    for (let item of this.carItemList){
    this.total= this.total + item.product.product.price
    
    }
    console.log(this.total)
}


deleteItem(order:any){
  console.log(order.id)
//  let idOrder=order.id
 this.server.deleteOrder(order.id).subscribe((data) =>{
  this.regetOrder()
  console.log(data);
 },)


}
}
