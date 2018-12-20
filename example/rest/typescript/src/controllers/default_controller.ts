import { Controller, defaultWorker, htmlResult, textResult, renderView } from "fortjs";

export class DefaultController extends Controller {
    @defaultWorker()
    async default() {
        try {
            const viewData = await renderView('controller:default,action:default');
            const result = await htmlResult(viewData);
            return result;
        } catch (ex) {
            console.log(ex);
            // handle exception and show user a good message.
            const result = await textResult(`Our server is busy right now. Please try later.`);
            return result;
        }
    }
}