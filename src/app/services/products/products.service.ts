import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../shared/models/products/category.dto';
import { IResponseResult } from '../../shared/common/IResponseResult';
import { FilterProductsDTO } from '../../shared/models/products/filterproducts.dto';
import { ProductDetailDTO } from '../../shared/models/products/productdetail.dto';
import { Product } from '../../shared/models/products/product.dto';
import { EditProductDTO } from '../../shared/models/products/EditProduct.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getFilteredProducts(filter: FilterProductsDTO, pageNumber: number, pageSize: number): Observable<IResponseResult<FilterProductsDTO>> {
    let params = new HttpParams();
    params = params.set('pageNumber', pageNumber.toString());
    params = params.set('pageSize', pageSize.toString());
    
    for (const category of filter['categories']) {
      params = params.append('categories', category.toString());  // افزودن هر دسته‌بندی
    }  
    if (filter.maxPrice !== null && filter.maxPrice !== undefined) {
      params = params.set('maxPrice', 'expensive');
    }
    if (filter.minPrice) {
      params = params.set('minPrice', filter.minPrice.toString());
    }
    return this.http.get<IResponseResult<FilterProductsDTO>>("/products/GetProducts", { params });
  
  }
  

  getProductActiveCategories(): Observable<IResponseResult<Category[]>> {
    return this.http.get<IResponseResult<Category[]>>('/products/Categories');
  }

  getSingleProduct(productId: number): Observable<IResponseResult<ProductDetailDTO>> {
    return this.http.get<IResponseResult<ProductDetailDTO>>('/products/single-product/' + productId);
  }

  getProductById(productId: number): Observable<IResponseResult<Product>> {
    return this.http.get<IResponseResult<Product>>('/products/get-product-by-id/' + productId);
}

getProductForEdit(productId: number): Observable<IResponseResult<EditProductDTO>> {
    return this.http.get<IResponseResult<EditProductDTO>>('/AdminProducts/get-product-for-edit/' + productId);
}

getLatestProducts(): Observable<IResponseResult<Product[]>> {
  return this.http.get<IResponseResult<Product[]>>('/products/latest');
}

//Product-Index
getProducts(): Observable<IResponseResult<Product[]>> {
  return this.http.get<IResponseResult<Product[]>>('/ProductManagement/Index');
}
}
