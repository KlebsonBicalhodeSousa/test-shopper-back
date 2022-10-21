export interface IProductDB {
    id: number,   
    name: string,
    price: number,
    qty_stock: number
}

export class Product {
    constructor(
        private id: number,   
        private name: string,
        private price: number,
        private qtyStock: number
    ) {}
   
    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getPrice = () => {
        return this.price
    }

    public getQtyStock = () => {
        return this.qtyStock
    }   
       
}

export interface IGetProductsOutputDTO {
    message: string,
    products: Product[]
}