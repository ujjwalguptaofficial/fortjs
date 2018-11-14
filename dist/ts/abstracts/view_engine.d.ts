import { IViewValue } from "../interfaces/view_option";
export declare abstract class ViewEngine {
    abstract render(value: IViewValue): Promise<string>;
}
