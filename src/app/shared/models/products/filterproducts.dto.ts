import { Product } from "./product.dto";

export class FilterProductsDTO {
  constructor(
    public name: string,
    public startPrice: number,
    public endPrice: number,
    public categories: number[],
    public data: Product[],
    public minPrice: number | null = null,
    public maxPrice:number | null = null
  ) {
  }
}
