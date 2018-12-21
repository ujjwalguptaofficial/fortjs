import {
    Controller,
    defaultWorker,
    htmlResult,
    textResult,
    renderView,
    route,
    fileResult,
    worker,
    HTTP_METHOD,
    jsonResult
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
        // check for file exist when there is no upload
        // do not remove this
        const isFileExist = this.file.isExist('jsstore');
        const filePath = Path.join(__dirname, "../static/scripts/", `${this.params.file}.js`);
        return fileResult(filePath);
    }

    @worker([HTTP_METHOD.Post])
    @route("/upload")
    async uploadFile() {
        const pathToSave = Path.join(__dirname, "../upload.png");
        let result;
        if (this.file.isExist('jsstore') === true) {
            await this.file.saveTo('jsstore', pathToSave);
            result = "file saved";
        } else {
            result = "file not saved";
        }

        return textResult(result);
    }

    @worker([HTTP_METHOD.Get])
    @route("/upload")
    async getUploadForm() {
        return htmlResult(`<html><head></head><body>\
        <form method="POST" enctype="multipart/form-data">\
         <input type="text" name="textfield"><br />\
         <input type="file" name="filefield"><br />\
         <input type="submit">\
       </form>\
     </body></html>`);
    }
}