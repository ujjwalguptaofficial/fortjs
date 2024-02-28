import { readFile } from "fs-extra";
import * as path from "path";
import { ViewReadOption } from "../interfaces";
import { promiseResolve } from "../utils";
import { Fort } from "../models";

const viewCache = {

};

export let getViewFromFile: (option: ViewReadOption) => Promise<string | any>;

const readView = (option: ViewReadOption) => {
    const pathOfView = path.join(Fort.viewPath, option.fileLocation);
    // eslint-disable-next-line
    return readFile(pathOfView, {
        encoding: 'utf8'
    }).then(result => {
        if (option.mapView != null) {
            return option.mapView(result);
        }
        return result;
    });
};
if (process.env.NODE_ENV === "production") {
    getViewFromFile = function (option: ViewReadOption): Promise<string | any> {
        if (viewCache[option.fileLocation] == null) {
            return readView(option).then(result => {
                viewCache[option.fileLocation] = result;
                return result;
            })
        }
        return promiseResolve(viewCache[option.fileLocation]);
    };
}
else {
    getViewFromFile = function (option: ViewReadOption): Promise<string | any> {
        return readView(option);
    };
}