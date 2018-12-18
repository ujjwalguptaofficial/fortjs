import { ViewEngineData } from "../types/view_engine_data";

export abstract class ViewEngine {
    abstract render(value: ViewEngineData): Promise<string>;
}