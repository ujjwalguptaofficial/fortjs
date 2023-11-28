import { Controller, defaultWorker, route, textResult, viewResult, worker, assign, guards } from "fortjs";
import { DefaultGuard } from "../guards/default_guard";

export class DefaultController extends Controller {

    // do not remove the guard - its a test
    @defaultWorker()
    @guards(DefaultGuard)
    async index(@assign('FortJs') title) {

        const data = {
            title: title
        };
        const result = await viewResult('views/default/index.html', data);
        return result;

    }
}