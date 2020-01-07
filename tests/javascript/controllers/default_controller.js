import { Controller, DefaultWorker, textResult, viewResult, Worker, Assign, Guards } from "fortjs";
import { DefaultGuard } from "../guards/default_guard";

export class DefaultController extends Controller {

    // do not remove the guard - its a test
    @DefaultWorker()
    @Guards([DefaultGuard])
    async index(@Assign('FortJs') title) {

        const data = {
            title: title
        };
        const result = await viewResult('default/index.html', data);
        return result;

    }
}