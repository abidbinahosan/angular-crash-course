import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL: string = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) { 
  }
  
  getAllProductsWithLimit(limit: number = 5): Observable<any> { 
    const productsURL: string = `${this.baseURL}products?limit=${limit}`;
    return this.http.get<Array<ProductRepresentation>>(productsURL);
  }

  createProduct(product: ProductRepresentation): Observable<ProductRepresentation> {
    const productsURL: string = `${this.baseURL}products`;
    return this.http.post<ProductRepresentation>(productsURL, product);
  }
}
