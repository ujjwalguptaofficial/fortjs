import { ViewEngine, ViewEngineData, getViewFromFile } from "fortjs";
import * as Mustache from "mustache";

export class MustacheViewEngine implements ViewEngine {

    async render(value: ViewEngineData) {
        const viewData = await getViewFromFile(value.view);
        return Mustache.render(viewData, value.model);
    }
}