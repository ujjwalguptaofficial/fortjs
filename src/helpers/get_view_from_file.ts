import { readFile, stat } from "fs/promises";
import * as path from "path";
import { ViewReadOption } from "../interfaces";
import { promiseResolve } from "../utils";
import { Fort } from "../models";

interface CacheEntry {
    content: string | any;
    mtimeMs: number;
}

// Use a Map instead of {}
const viewCache = new Map<string, CacheEntry>();

const readAndMap = async (option: ViewReadOption, pathOfView: string): Promise<CacheEntry> => {
    const fileStats = await stat(pathOfView);
    const result = await readFile(pathOfView, { encoding: 'utf8' });

    const finalContent = option.mapView != null ? option.mapView(result) : result;

    return {
        content: finalContent,
        mtimeMs: fileStats.mtimeMs
    };
};

export const getViewFromFile = async function (option: ViewReadOption): Promise<string | any> {
    const fullPath = path.join(Fort.viewPath, option.fileLocation);
    const fileStats = await stat(fullPath);

    const cached = viewCache.get(option.fileLocation); // Use .get()

    if (cached && cached.mtimeMs === fileStats.mtimeMs) {
        return promiseResolve(cached.content);
    }

    const entry = await readAndMap(option, fullPath);
    viewCache.set(option.fileLocation, entry); // Use .set()
    return entry.content;
};
