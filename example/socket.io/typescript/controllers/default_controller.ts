import {
    Controller, DefaultWorker, Worker, htmlResult,
    textResult, renderView, viewResult, Route, HTTP_METHOD
} from "fortjs";

export class DefaultController extends Controller {

    @DefaultWorker()
    async index() {
        try {
            const model = {
                title: 'FortJs'
            }
            const result = await viewResult('default/index.html', model);
            return result;
        } catch (ex) {
            console.log(ex);
            // handle exception and show user a good message.
            // save this ex in a file or db, so that you can know what's the issue and where
            const result = await textResult(`Our server is busy right now. Please try later.`);
            return result;
        }
    }

    @Worker([HTTP_METHOD.Get])
    @Route('/chat')
    async chat() {
        try {
            const viewData = await renderView('default/chat.html');
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