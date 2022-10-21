import { app } from "./app";
import { BaseDatabase } from "./database/BaseDatabase";
import { clientRouter } from "./router/clientRouter";
import { productRouter } from "./router/productRouter";


app.use("/client", clientRouter)
app.use("/products", productRouter)

