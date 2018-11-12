import { IViewOption } from "../interfaces/view_option";
export declare abstract class ViewEngine {
    abstract render(option: IViewOption): Promise<string>;
}
