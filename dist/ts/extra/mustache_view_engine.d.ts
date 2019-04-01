import { ViewEngineData } from "../types";
import { ViewEngine } from "../abstracts";
export declare class MustacheViewEngine implements ViewEngine {
    render(value: ViewEngineData): Promise<any>;
}
