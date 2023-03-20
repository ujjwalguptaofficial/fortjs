import * as Mustache from "mustache";
import { ViewEngineData } from "../types";
import { getViewFromFile } from "../helpers";
import { ViewEngine } from "../abstracts";

export class MustacheViewEngine implements ViewEngine {

    render(value: ViewEngineData) {
        return getViewFromFile({
            fileLocation: value.view
        }).then(viewData => {
            return Mustache.render(viewData, value.model);
        })
    }
}