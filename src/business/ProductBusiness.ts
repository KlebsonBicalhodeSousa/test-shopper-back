import { ProductDatabase } from "../database/ProductDatabase";
// import { MissingFields } from "../errors/MissingFields";
// import { NotFoundError } from "../errors/NotFoundError";
// import { ParamsError } from "../errors/ParamsError";
// import { IGetPurchasesListOutputDTO, IOrderInputDTO, Order } from "../model/Order";
import { IGetProductsOutputDTO, Product } from "../model/Products";
import { IdGenerator } from "../services/IdGenerator";

export class ProductBusiness {
    constructor(
        private productDataBase: ProductDatabase,
        private idGenerator: IdGenerator
    ) {}

    public getProducts = async ():Promise<IGetProductsOutputDTO> => {
        
        const productDb = await this.productDataBase.selectProducts()

        const products = productDb.map((product) => {
                return new Product (
                    product.id,
                    product.name,
                    product.price,
                    product.qty_stock
                )
            }) 
            
        const response: IGetProductsOutputDTO = {
        message: "Sucesso",
        products: products
        }       

        return response

    }
    
}