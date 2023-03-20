import { readFile } from "fs-extra";
import * as path from "path";
import { FortGlobal } from "../fort_global";
import { ViewReadOption } from "../types";
import { promiseResolve } from "../utils";

const viewCache = {

};

export let getViewFromFile: (option: ViewReadOption) => Promise<string | any>;

const readView = (option: ViewReadOption) => {
    const pathOfView = path.join(FortGlobal.viewPath, option.fileLocation);
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
if (FortGlobal.isProduction === true) {
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