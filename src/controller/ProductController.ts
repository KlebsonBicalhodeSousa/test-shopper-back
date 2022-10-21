import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { IOrderInputDTO } from "../model/Order";

export class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ) {}

    public getProducts = async (req: Request, res: Response) => {
        try {
            
            const response = await this.productBusiness.getProducts()
            
            res.status(200).send(response)
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({message: error.message})
        }
    }  
    
}