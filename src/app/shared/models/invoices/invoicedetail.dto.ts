export class InvoiceDetailDTO {
    constructor(
     public id: number,
     public productName: string,
     public invoiceDate: string,
     public  count: number,
     public amount: number,
    ) {
    }
  }
