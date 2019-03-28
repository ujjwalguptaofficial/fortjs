import {
    Controller,
    DefaultWorker,
    htmlResult,
    textResult,
    renderView,
    viewResult,
    Worker
} from "fortjs";

export class DefaultController extends Controller {
    @DefaultWorker()
    async default () {
        try {
            const model = {
                title: 'FortJs'
            }
            const result = await viewResult('controller:default,worker:default', model);
            return result;
        } catch (ex) {
            console.log(ex);
            // handle exception and show user a good message.
            // save this ex in a file or db, so that you can know what's the issue and where
            const result = await textResult(`Our server is busy right now. Please try later.`);
            return result;
        }
    }

    @Worker( )
    async chat() {
        try {
            const viewData = await renderView('controller:default,worker:chat');
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