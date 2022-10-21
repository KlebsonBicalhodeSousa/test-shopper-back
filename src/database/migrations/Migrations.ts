import { BaseDatabase } from "../BaseDatabase"
import { ClientDatabase } from "../ClientDatabase"
import { ProductDatabase } from "../ProductDatabase"
import { productsStock, client, order } from "./data"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            if (error instanceof Error) {
                console.log(error.message)
            }
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${ClientDatabase.TABLE_ORDER_PRODUCT};        
        DROP TABLE IF EXISTS ${ClientDatabase.TABLE_CLIENTS};
        DROP TABLE IF EXISTS ${ProductDatabase.TABLE_PRODUCT};
        
        CREATE TABLE IF NOT EXISTS ${ProductDatabase.TABLE_PRODUCT} (
            id INT NOT NULL,
            name VARCHAR(255) PRIMARY KEY,
            price decimal(4,2) NOT NULL,
            qty_stock INT NOT NULL           
          );

          CREATE TABLE IF NOT EXISTS ${ClientDatabase.TABLE_CLIENTS} (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            delivery_date DATE NOT NULL 
          );          

          CREATE TABLE IF NOT EXISTS ${ClientDatabase.TABLE_ORDER_PRODUCT} (	
            id INT NOT NULL,	
            product_name VARCHAR(255) NOT NULL,    
            quantity INT,
            order_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (product_name) REFERENCES ${ProductDatabase.TABLE_PRODUCT} (name),
            FOREIGN KEY (order_id) REFERENCES ${ClientDatabase.TABLE_CLIENTS} (id)
            
        );
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCT)
            .insert(productsStock)
        
        await BaseDatabase
            .connection(ClientDatabase.TABLE_CLIENTS)
            .insert(client)        
       
        await BaseDatabase
            .connection(ProductDatabase.TABLE_ORDER_PRODUCT)
            .insert(order)
    }
}

const migrations = new Migrations()
migrations.execute()