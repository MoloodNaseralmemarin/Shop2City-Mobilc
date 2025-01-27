export class EditProductDTO {
    constructor(
        public id: number,
        public productName: string,
        public price: number,
        public description: string,
        public currentImage: string,
    ) {
    }
}