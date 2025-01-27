import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IResponseResult } from '../../shared/common/IResponseResult';
import { InvoiceBasketDetail } from '../../shared/models/invoices/invoicebasketdetail.dto';
import { InvoiceDTO } from '../../shared/models/invoices/invoice.dto';
import { TypePost } from '../../shared/models/typeposts/typepost.dto';
import { InvoiceDetailDTO } from '../../shared/models/invoices/invoicedetail.dto';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoiceDetails: BehaviorSubject<InvoiceBasketDetail[] | null> = new BehaviorSubject<InvoiceBasketDetail[] | null>(null);


  constructor(
    private http:HttpClient
  ) { }

 // Data Local
  _setOrderDetails(details: InvoiceBasketDetail[]) {
    this.invoiceDetails.next(details);
  }

  _getOrderDetails(): Observable<InvoiceBasketDetail[] | null> {
    return this.invoiceDetails;
  }

  addProductToInvoice(productId: number, count: number): Observable<IResponseResult<any>> {
    const params = 
    new HttpParams()
    .set('productId', productId.toString())
    .set('count', count.toString());
    return this.http.get<IResponseResult<any>>('/invoices/add-invoice', {params});
  }

  getCustomerBasketDetails(): Observable<IResponseResult<InvoiceBasketDetail[]>> {
    return this.http.get<IResponseResult<InvoiceBasketDetail[]>>('/invoices/get-invoice-details');
  }
  
  removeOrderDetail(detailId: number): Observable<IResponseResult<InvoiceBasketDetail[]>> {
    return this.http.get<IResponseResult<InvoiceBasketDetail[]>>('/invoices/remove-invoice-detail/' + detailId);
}
showInvoiceDetail():Observable<IResponseResult<InvoiceDTO[]>>{
  return this.http.get<IResponseResult<InvoiceDTO[]>>('/invoices/unpaid');
}

getLoadPostType():Observable<IResponseResult<TypePost[]>> {
  return this.http.get<IResponseResult<TypePost[]>>('/PostTypes/all-postType');
}
}
