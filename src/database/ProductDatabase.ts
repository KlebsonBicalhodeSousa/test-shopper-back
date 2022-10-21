import { IProductDB } from "../model/Products";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    
    public static TABLE_PRODUCT = "Products_Stock"
    public static TABLE_ORDER_PRODUCT = "Products_Clients" 

    public selectProducts = async (): Promise<IProductDB[]> => {
        const result: IProductDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCT)
        .select()  

        return result
    }

    public updateProductStock = async (qtyStock: number, id: number): Promise<void> => {
        await BaseDatabase
        .connection.raw(`UPDATE Products_Stock
        SET qty_stock = ${qtyStock}
        WHERE id = ${ id };`)       
    }

    public findByProductName = async (name: string): Promise<IProductDB | undefined> => {
        const result = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCT)
            .select()
            .where({ name })           

        return result[0]
    }    
}