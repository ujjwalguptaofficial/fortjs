import { Controller, DefaultWorker, textResult, viewResult, Worker, Assign } from "fortjs";

export class DefaultController extends Controller {

    @DefaultWorker()
    async index(@Assign('FortJs') title: string) {
        try {
            const data = {
                title: title
            };
            const result = await viewResult('default/index.html', data);
            return result;
        } catch (ex) {
            // handle exception and show user a good message.
            // save this ex in a file or db, so that you can know what's the issue and where
            const result = await textResult("Our server is busy right now. Please try later.");
            return result;
        }
    }
}