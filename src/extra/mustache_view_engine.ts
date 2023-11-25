import * as Mustache from "mustache";
import { IViewEngineData } from "../interfaces";
import { getViewFromFile } from "../helpers";
import { ViewEngine } from "../abstracts";

export class MustacheViewEngine implements ViewEngine {

    render(value: IViewEngineData) {
        return getViewFromFile({
            fileLocation: value.view
        }).then(viewData => {
            return Mustache.render(viewData, value.model);
        })
    }
}