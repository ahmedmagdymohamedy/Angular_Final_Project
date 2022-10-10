import { ProductsSearchService } from './../../../../services/products-search.service';
import { ServerService } from 'src/app/services/server.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList:any;
  public filterCategory:any;
  searchKey:string ="";
  public searchTerm !: any;
  constructor(private productService : ProductsSearchService,private apiservice:ServerService) { }
  public totalItem : number = 0;

  ngOnInit(): void {
    
    this.apiservice.getProducts()
    .subscribe(res=>{
      this.productList=res;
      this.filterCategory=res;
    
      this.productList.forEach((a:any) => {
        if(a.category==="women's clothing" || a.category==="men's clothing")
        {
          a.category="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      
      });
      console.log(this.productList)
    });
    this.productService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
 

}
