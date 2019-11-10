import { readFile } from "fs-extra";
import { isEnvProduction } from "./is_env_production";
import * as path from "path";
import { FortGlobal } from "../fort_global";
import { __CurrentPath } from "../constant";

const viewCache = {

};
export const getViewFromFile = async function (fileLocation: string): Promise<string> {
    const readView = () => {
        const pathOfView = path.join(FortGlobal.viewPath, fileLocation);
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