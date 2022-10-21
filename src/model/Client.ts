export interface IClientDB {
    id: string,  
    name: string,
    delivery_date: Date
}

export class Client {
    constructor(
        private id: string,
        private name: string,
        private deliveryDate: Date
        ) {}   

    public getId = () => {
        return this.id
    }
    public getName = () => {
        return this.name
    }

    public getDeliveryDate = () => {
        return this.deliveryDate
    }    
    public setDeliveryDate = () => {
        return this.deliveryDate
    } 
    
}

export interface ISignupInputDTO {
    name: string,
    deliveryDate: string
}

// export interface ISignupOutputDTO {
//     message: string,
//     token: string
// }

// export interface ILoginInputDTO {
//     email: string,
//     password: string
// }

export interface IMessageOutputDTO {
    message: string,
    id: string,
    name: string 
}