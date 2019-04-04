import { ViewEngineData } from "../types";

export abstract class ViewEngine {
    abstract render(value: ViewEngineData): Promise<string>;
}