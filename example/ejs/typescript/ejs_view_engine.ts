import { ViewEngine, ViewEngineData, getViewFromFile } from "fortjs";
import * as ejs from "ejs"; 

export class EjsViewEngine implements ViewEngine {

    async render(value: ViewEngineData) {
        const viewData = await getViewFromFile(value.view);
        return ejs.render(viewData, value.model);
    }
}