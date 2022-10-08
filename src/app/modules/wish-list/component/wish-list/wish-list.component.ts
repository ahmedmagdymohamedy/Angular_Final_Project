import { Component, OnInit } from '@angular/core';
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
check:boolean=false;

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
  
}
