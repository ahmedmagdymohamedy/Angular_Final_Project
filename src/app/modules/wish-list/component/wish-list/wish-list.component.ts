import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  constructor(private server:ServerService) { }
 WishList:any[]=[];
//  UserID:number = 0;
 product:any;
check:boolean=false;
// IsWish :boolean= true;
IsInCart:boolean=false;

checkList()
  {
    if( this.WishList.length!=0){
      this.check=true;
      console.log("true");
    }
      
      
  }

  ngOnInit(): void {

    this.server.getWishlist(3).subscribe(data=>{
      this.WishList=data;
      this.checkList()
      console.log(this.WishList)
    });
    
    
  }
  onClickAddToCard  =(productID :number)=>{
    for(let item of this.WishList){
      if(productID==item.product.id){
    this.server.addToCart(3,item.product).subscribe(w=>{
      this.IsInCart=true;
    })
    }
    }
  }
  
  onClickRemove  =(ID :number)=>{
    for(let item of this.WishList){
      if (ID==item.id)
      {
        console.log(item)
        this.server.deleteFromWish(item)
      }
    }
  }
}
