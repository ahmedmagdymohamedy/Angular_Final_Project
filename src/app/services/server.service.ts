import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  static readonly BASE_URL: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}

  // _______________________ Products __________________
  // ____ get product ___
  getProducts(): Observable<any> {
    return this.httpClient.get(ServerService.BASE_URL + '/products');
  }

  //____get Product Limit 6 Product ______________________

  getProductsLimit(): Observable<any> {
    return this.httpClient.get(
      ServerService.BASE_URL + '/products' + '?&_limit=6'
    );
  }

  // ____ get product by id ___
  getProductByID(productID: number): Observable<any> {
    return this.httpClient.get(
      ServerService.BASE_URL + '/products/' + productID
    );
  }

  // _______________________ Orders __________________
  // ____ get orders ___
  getOrders(): Observable<any> {
    return this.httpClient.get(ServerService.BASE_URL + '/orders');
  }

  getOrdersBYId(userID: number): Observable<any> {
    return this.httpClient.get(
      ServerService.BASE_URL + '/orders?userID=' + userID
    );
  }

  // ____ posst orders ___
  addToCart(userID: number, product: any): Observable<any> {
    console.log(product);
    return this.httpClient.post(ServerService.BASE_URL + '/orders', {
      id: this.generateID(),
      userID: userID,
      product: {
        product: product,
        count: 1,
      },
    });
  }

  // ____ update orders ___

  // ____ delete orders ___
  deleteFromWish(id: number) {
    console.log(id);
    return this.httpClient.delete(ServerService.BASE_URL + `/wishlist/${id}`);
  }

  deleteOrder(id: number) {
    console.log(id);
    return this.httpClient.delete(ServerService.BASE_URL + `/orders/${id}`);
  }

  // _______________________ Wich list __________________
  // ____ get Wich list ___
  getWishlist(userID: number): Observable<any> {
    return this.httpClient.get(
      ServerService.BASE_URL + '/wishlist?userID=' + userID
    );
  }

  // ____ post Wich list ___
  addToWishList(userID: number, product: any): Observable<any> {
    console.log(product);
    return this.httpClient.post(ServerService.BASE_URL + '/wishlist', {
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

  // ------------------------cart--------------
}
