import { BaseError } from "./BaseError";

export class ParamsError extends BaseError {
    constructor(
        message: string = "Parâmetros inválidos" 
    ) {
        super(401, message)
    }
}