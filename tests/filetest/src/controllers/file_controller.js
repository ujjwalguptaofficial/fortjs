import {
    Controller,
    defaultWorker,
    htmlResult,
    textResult,
    renderView,
    route,
    fileResult,
    worker
} from "fortjs";

import * as Path from "path";

export class FileController extends Controller {
    @defaultWorker()
    async default () {
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

    @route("/scripts/{file}.js")
    @worker()
    async getScripts() {
        const filePath = Path.join(__dirname, "../static/scripts/", `${this.params.file}.js`);
        return fileResult(filePath);
    }
}