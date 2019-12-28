import * as Mustache from "mustache";
import { ViewEngineData } from "../types";
import { getViewFromFile } from "../helpers";
import { ViewEngine } from "../abstracts";

export class MustacheViewEngine implements ViewEngine {

    async render(value: ViewEngineData) {
        const viewData = await getViewFromFile({
            fileLocation: value.view
        });
        return Mustache.render(viewData, value.model);
    }
}