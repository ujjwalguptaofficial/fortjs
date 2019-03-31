import { readFile } from "fs-extra";
import { isEnvProduction } from "./is_env_production";
import * as path from "path";
import { Global } from "../global";
import { __CurrentPath } from "../constant";

const viewCache = {

};
export const getViewFromFile = async function (fileLocation: string): Promise<string> {
    const readView = function () {
        const pathOfView = path.join(__CurrentPath, `${Global.viewPath}/${fileLocation}`);
        return readFile(pathOfView, {
            encoding: 'utf8'
        });
    };

    if (isEnvProduction()) {
        if (viewCache[fileLocation] == null) {
            viewCache[fileLocation] = await readView();
        }
        return viewCache[fileLocation];

    }
    return await readView();
};