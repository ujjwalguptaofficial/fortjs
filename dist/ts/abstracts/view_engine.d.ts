import { ViewEngineData } from "../types";
export declare abstract class ViewEngine {
    abstract render(value: ViewEngineData): Promise<string>;
}
