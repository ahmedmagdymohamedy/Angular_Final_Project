import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  static readonly BASE_URL: string = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }

  // _______________________ Products __________________
  // ____ get product ___
  getProducts(): Observable<any> {
    return this.httpClient.get(ServerService.BASE_URL + "/products");
  }

  // ____ get product by id ___
  getProductByID(productID: number): Observable<any> {
    return this.httpClient.get(ServerService.BASE_URL + '/products/' + productID);
  }

  // _______________________ Orders __________________
  // ____ get orders ___
  getOrders(): Observable<any> {
    return this.httpClient.get(ServerService.BASE_URL + "/orders");
  }

  // ____ posst orders ___
  addToCart(userID: number, product: any): Observable<any> {
    console.log(product);
    return this.httpClient.post(ServerService.BASE_URL + "/orders", {
      id: this.generateID(),
      userID: userID,
      product: {
        product: product,
        count: 1
      },
    });
  }

  // ____ update orders ___

  // ____ delete orders ___


  // _______________________ Orders __________________
  // ____ get orders ___


  // ____ post orders ___
  addToWishList(userID: number, product: any): Observable<any> {
    console.log(product);
    return this.httpClient.post(ServerService.BASE_URL + "/wishlist", {
      id: this.generateID(),
      userID: userID,
      product: product,
    });
  }

  // ____ delete orders ___

  // ________________________ Generate Random ID (use it when post new any elment) ___________________
  generateID(): number {
    return Math.floor(Math.random() * 10000);
  }
}
