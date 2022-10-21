import { Router } from "express"
import { ClientBusiness } from "../business/ClientBusiness"
import { ProductBusiness } from "../business/ProductBusiness"
import { ClientController } from "../controller/ClientController"
import { ClientDatabase } from "../database/ClientDatabase"
import { ProductDatabase } from "../database/ProductDatabase"
import { IdGenerator } from "../services/IdGenerator"

export const clientRouter = Router()

const clientController = new ClientController(
    new ClientBusiness(
        new ClientDatabase(),
        new ProductDatabase(),
        new IdGenerator()
    )    
)

clientRouter.post("/register", clientController.registerOrder)
clientRouter.get("/show-order/:id", clientController.getListPurchases)
clientRouter.post("/order-purchase/:id", clientController.createListPurchases)
clientRouter.delete("/product/delete/:orderId", clientController.deleteProduct)
clientRouter.delete("/products/delete/:orderId", clientController.deleteProductName)
