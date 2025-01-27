import { Product } from "./product.dto";
import { ProductGallery } from "./productgallery";


export class ProductDetailDTO {
  constructor(
    public product: Product,
    public galleries: ProductGallery[]
  ) {
  }
}
