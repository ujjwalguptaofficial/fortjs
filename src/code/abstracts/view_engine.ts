import { IViewOption } from "../interfaces/view_option";


export abstract class ViewEngine {
    abstract render(option: IViewOption): Promise<string>
}