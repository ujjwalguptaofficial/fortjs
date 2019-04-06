import {
    Controller,
    DefaultWorker,
    htmlResult,
    textResult,
    renderView,
    Route,
    fileResult,
    Worker,
    HTTP_METHOD,
    jsonResult
} from "fortjs";

import * as Path from "path";

export class FileController extends Controller {
    @DefaultWorker()
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

    @Route("/scripts/{file}.js")
    @Worker()
    async getScripts() {
        // check for file exist when there is no upload
        // do not remove this
        const isFileExist = this.file.isExist('jsstore');
        const filePath = Path.join(__dirname, "../static/scripts/", `${this.param.file}.js`);
        return fileResult(filePath);
    }

    @Worker([HTTP_METHOD.Post])
    @Route("/upload")
    async uploadFile() {
        const pathToSave = Path.join(__dirname, "../upload.png");
        let result = {};
        if (this.file.count > 0) {
            result = this.file.files[0];
            result.count = this.file.count;
        }
        if (this.file.isExist('jsstore') === true) {
            await this.file.saveTo('jsstore', pathToSave);
            result.responseText = "file saved";
        } else {
            result.responseText = "file not saved";
        }
        return jsonResult(result);
    }

    @Worker([HTTP_METHOD.Get])
    @Route("/upload")
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