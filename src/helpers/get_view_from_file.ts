import { readFile } from "fs-extra";
import * as path from "path";
import { FortGlobal } from "../fort_global";
import { __CurrentPath } from "../constant";
import { ViewReadOption } from "../types";

const viewCache = {

};

export let getViewFromFile: (option: ViewReadOption) => Promise<string | any>;

const readView = async (option: ViewReadOption) => {
    const pathOfView = path.join(FortGlobal.viewPath, option.fileLocation);
    const result = await readFile(pathOfView, {
        encoding: 'utf8'
    });
    if (option.mapView != null) {
        return option.mapView(result);
    }
    return result;
};
if (FortGlobal.isProduction === true) {
    getViewFromFile = async function (option: ViewReadOption): Promise<string | any> {
        if (viewCache[option.fileLocation] == null) {
            viewCache[option.fileLocation] = await readView(option);
        }
        return viewCache[option.fileLocation];
    };
}
else {
    getViewFromFile = async function (option: ViewReadOption): Promise<string | any> {
        return await readView(option);
    };
}