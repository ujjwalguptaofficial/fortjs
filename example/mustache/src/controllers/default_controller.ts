import { Controller, DefaultWorker, textResult, viewResult } from "fortjs";

export class DefaultController extends Controller {
    @DefaultWorker()
    async default() {
        try {
            const model = {
                title: "FortJs",
                msg: "This is rendered by mustache"
            };
            const result = await viewResult("default/index.html", model);
            return result;
        } catch (ex) {
            console.log(ex);
            // handle exception and show user a good message.
            const result = await textResult(`Our server is busy right now. Please try later.`);
            return result;
        }
    }
}