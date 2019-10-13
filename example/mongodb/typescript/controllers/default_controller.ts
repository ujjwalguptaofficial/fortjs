import { Controller, DefaultWorker, textResult, viewResult, Worker } from "fortjs";

export class DefaultController extends Controller {

    @DefaultWorker()
    async index() {

        const model = {
            title: 'FortJs'
        };
        const result = await viewResult('default/index.html', model);
        return result;
    }
}