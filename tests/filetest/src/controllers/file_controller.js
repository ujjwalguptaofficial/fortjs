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
    jsonResult,
    assign
} from "fortjs";

import * as Path from "path";

export class FileController extends Controller {

    @defaultWorker()
    async default(@assign('Welcome to FortJs') title) {
        try {
            const viewData = await renderView('controller:default,action:default', { title: title });
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
        // Note :- do not remove this
        try {
            const isFileExist = this.file.isExist('jsstore');
            const filePath = Path.join(__dirname, "../static/scripts/", `${this.param.file}.js`);
            return fileResult(filePath);
        } catch (ex) {
            console.error(ex);
        }

    }

    @worker(HTTP_METHOD.Post)
    @route("/upload")
    async uploadFile() {
        const pathToSave = Path.join(__dirname, "../upload.png");
        console.log("count", this.file.count);
        let result = {
            count: this.file.count
        };
        if (this.file.count > 0) {
            result = {
                ...result,
                ...this.file.files[0]
            };
        }
        if (this.file.isExist('jsstore') === true) {
            await this.file.saveTo('jsstore', pathToSave);
            result.responseText = "file saved";
        } else {
            result.responseText = "file not saved";
        }
        return jsonResult(result);
    }

    @worker(HTTP_METHOD.Get)
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

    @worker(HTTP_METHOD.Get)
    async getCookie() {

        const result = textResult(this.cookie.getCookie('hello'));
        console.log(result);
        return result;
    }
}