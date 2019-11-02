import { Controller, DefaultWorker, textResult, viewResult, Worker } from "fortjs";

export class DefaultController extends Controller {

    @DefaultWorker()
    async index() {
        try {
            if (this.query.error == 'true') {
                throw new Error("Exception occured");
            }
            else {
                return textResult('Runing Ok');
            }
        } catch (ex) {
            this.logger.error(`message - ${ex.message}, stack trace - ${ex.stack}`);
            const result = textResult(`Our server is busy right now. Please try later.`);
            return result;
        }
    }
}