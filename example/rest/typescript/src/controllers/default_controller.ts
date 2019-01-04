import { Controller, DefaultWorker, htmlResult, textResult, renderView, viewResult } from "fortjs";

export class DefaultController extends Controller {
    @DefaultWorker()
    async default() {
        try {
            const result = await viewResult('controller:default,action:default');
            return result;
        } catch (ex) {
            console.log(ex);
            // handle exception and show user a good message.
            const result = await textResult(`Our server is busy right now. Please try later.`);
            return result;
        }
    }
}