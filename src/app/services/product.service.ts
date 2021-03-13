
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44314/api/products/getall';

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<listResponseModel<Product>> {
    return this.httpClient.get<listResponseModel<Product>>(this.apiUrl);
  }
}