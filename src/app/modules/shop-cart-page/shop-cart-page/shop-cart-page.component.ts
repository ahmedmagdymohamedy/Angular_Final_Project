import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-shop-cart-page',
  templateUrl: './shop-cart-page.component.html',
  styleUrls: ['./shop-cart-page.component.scss']
})
export class ShopCartPageComponent implements OnInit {

  constructor(private server:ServerService,private router:Router) {
    
  }
  carItemList:any[]=[];
  total:number=0;
  CartQuantityNumber:number=1;
  
  plusValue(order:any){
    for(let item of this.carItemList){
      if(item.id == order.id ){
        item.product.count = item.product.count + 1
        this.calcTotal()
        console.log(item.product.count);
      }
    }
  };
  
  minusValue(order:any){
    if(this.CartQuantityNumber=1){

    }
    for (let item of this.carItemList){
      if(item.id == order.id ){
        if(item.product.count>1){
          item.product.count = item.product.count - 1
          this.total= this.total - item.product.product.price
          console.log(item.product.count);
        }
        
      }
  }
  }

  goToProductsScreen(){
    this.router.navigate(['products']);
  }
  goToPaymentScreen(){
    this.router.navigate(['payment']);
  }
  regetOrder(){
    this.server.getOrdersBYUserId(3).subscribe((data)=>{
      this.carItemList = data
      this.total=0
      this.calcTotal() 
    })  
  }


  ngOnInit(): void 
  {
   this.regetOrder()

  }



calcTotal(){    
    for (let item of this.carItemList){
    this.total= this.total + item.product.product.price
    }
}


deleteItem(order:any){
 this.server.deleteOrder(order.id).subscribe((data) =>{
  this.regetOrder()
 },)


}
}
