import { Controller, DefaultWorker, textResult, viewResult, Worker, Assign } from "fortjs";

export class DefaultController extends Controller {

    @DefaultWorker()
    async index(@Assign('FortJs') title: string) {
        const data = {
            title: title
        };
        const result = await viewResult('default/index.html', data);
        return result;
    }
}