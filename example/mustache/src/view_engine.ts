import { ViewEngine, ViewEngineData } from "fortjs";
import * as Mustache from "moustache";
import * as Fs from "fs";
import * as path from "path";

export class MoustacheViewEngine implements ViewEngine {

    getViewDataFromFile(location: string) {
        return new Promise((res, rej) => {
            const pathOfView = path.join(__dirname, `views/${location}`);
            Fs.readFile(pathOfView, {
                encoding: 'utf8'
            }, (err, data) => {
                if (err) {
                    rej(err);
                }
                else {
                    res(data);
                }
            });
        });
    }
    async render(value: ViewEngineData) {
        const viewData = await this.getViewDataFromFile(value.view);
        return Mustache.render(viewData, value.model);
    }
}