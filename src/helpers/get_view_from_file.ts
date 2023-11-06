import { readFile } from "fs-extra";
import * as path from "path";
import { FORT_GLOBAL } from "../constants/fort_global";
import { ViewReadOption } from "../types";
import { promiseResolve } from "../utils";

const viewCache = {

};

export let getViewFromFile: (option: ViewReadOption) => Promise<string | any>;

const readView = (option: ViewReadOption) => {
    const pathOfView = path.join(FORT_GLOBAL.viewPath, option.fileLocation);
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
if (FORT_GLOBAL.isProduction === true) {
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