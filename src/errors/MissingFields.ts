import { BaseError } from "./BaseError";

export class MissingFields extends BaseError {
    constructor(
        message: string = "Todos os parâmetros devem ser preenchidos" 
        ) {
        super(422, message)
    }
}