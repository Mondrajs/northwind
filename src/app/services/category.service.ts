import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { category } from '../models/category';
import { listResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
   apiUrl= 'https://localhost:44314/api/categories/getall';

  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<listResponseModel<category>>{
    return this.httpClient.get<listResponseModel<category>>(this.apiUrl);
  }
}
