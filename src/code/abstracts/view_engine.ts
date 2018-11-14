import { IViewValue } from "../interfaces/view_option";


export abstract class ViewEngine {
    abstract render(value: IViewValue): Promise<string>
}