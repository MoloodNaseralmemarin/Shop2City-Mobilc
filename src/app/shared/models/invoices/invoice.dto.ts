import { InvoiceDetailDTO } from "./invoicedetail.dto";

export class InvoiceDTO {
    constructor(
      public id: number,
      public customerId: number,
      public invoiceDate: string,
      public isPay: boolean,
      public totalAmount: number,
      public details: InvoiceDetailDTO[],
    ) {
    }
  }