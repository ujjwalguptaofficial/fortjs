import {
    ViewEngine,
    ViewEngineData,
    getViewFromFile
} from "fortjs";
import * as ejs from "ejs";

export class EjsViewEngine extends ViewEngine {

    async render(value) {
        const viewData = await getViewFromFile(value.view);
        return ejs.render(viewData, value.model);
    }
}