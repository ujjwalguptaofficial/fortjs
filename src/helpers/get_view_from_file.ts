import { readFile } from "fs-extra";
import { isEnvProduction } from "./is_env_production";
import * as path from "path";
import { FortGlobal } from "../fort_global";
import { __CurrentPath } from "../constant";

const viewCache = {

};

export const getViewFromFile = async function <T>(fileLocation: string, mapView?: (viewData: string) => any): Promise<T | string> {
    const readView = async () => {
        const pathOfView = path.join(FortGlobal.viewPath, fileLocation);
        const result = await readFile(pathOfView, {
            encoding: 'utf8'
        });
        if (mapView != null) {
            return mapView(result);
        }
        return result as T | string;
    };

    if (isEnvProduction()) {
        if (viewCache[fileLocation] == null) {
            viewCache[fileLocation] = await readView();
        }
        return viewCache[fileLocation];

    }
    return await readView();
};