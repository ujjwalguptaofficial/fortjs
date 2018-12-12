import { ErrorHandler } from "fortjs";

export class CustomErrorHandler extends ErrorHandler {
    async onForbiddenRequest(){
       return `<h1>We are sorry, but you are not allowed access to this resource.</h1>`
    }
}