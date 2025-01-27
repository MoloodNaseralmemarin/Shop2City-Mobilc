import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseResult } from '../../shared/common/IResponseResult';
import { Category } from '../../shared/models/products/category.dto';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http:HttpClient
  ) { }

  ShowCategories():Observable<IResponseResult<Category[]>>{
    return this.http.get<IResponseResult<Category[]>>('/products/Categories');
  }
}



  