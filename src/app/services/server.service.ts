import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  static readonly BASE_URL: string = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<any> {
    return this.httpClient.get(ServerService.BASE_URL + "/products");
  }

  getProductByID(productID: number): Observable<any> {
    return this.httpClient.get(ServerService.BASE_URL + '/products/' + productID);
  }
}
