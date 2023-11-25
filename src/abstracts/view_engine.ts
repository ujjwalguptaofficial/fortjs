import { IViewEngineData } from "../interfaces";

export abstract class ViewEngine {
    abstract render(value: IViewEngineData): Promise<string>;
}