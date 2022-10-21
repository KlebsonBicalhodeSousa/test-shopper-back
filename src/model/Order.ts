export interface IProductsClientDB {   
    id: number,
    product_name: string,
    quantity: number,
    order_id: string,
}
export interface IPurchaseDTO {    
    productName: string,    
    price: string,    
    quantity: number
}

export class ProductsClient {
    constructor(
        private id: number,
        private clientName: string,             
        private deliveryDate: Date,             
        private listPurchases: IPurchaseDTO[]
    ) {}
   
    public getId = () => {
        return this.id
    }
    public removeId = (idToRemove: number) => {
        return this.id !== idToRemove
    }

    public getClientName = () => {
        return this.clientName
    }
    
    public getDeliveryDate = () => {
        return this.deliveryDate
    } 
    public setDeliveryDate = (newDeliveryDate: Date) => {
        return this.deliveryDate = newDeliveryDate
    } 

    public getListPurchases = () => {
        return this.listPurchases
    }      
        
         
    
}

export interface IOrderInputDTO {     
    listPurchase: {
        name: string,    
        quantity: number
    }[]
}

export interface IlistPurchaseDTO {
    idProduct: number,
    productName: string,
    price: number,
    quantity: number,
    subTotal: number
}

 

export interface IPurchasesByUserDTO { 
    orderId: string,
    clientName: string,
    deliveryDate: Date,
    listPurchase: IlistPurchaseDTO[],
    total: number    
}


export interface IGetPurchasesByUserDTO { 
    orderId: string,
    clientName: string,
    deliveryDate: Date,
    productName: string,
    price: number,
    quantity: number  
}

export interface ICreateOrderOutputDTO {
    message: "Lista criada com sucesso",
    order: {
        id: string,
        deliveryDate: Date,
        products: {
            name: string,    
            quantity: number 
            price:number           
        }[],
        total: number
    }
}