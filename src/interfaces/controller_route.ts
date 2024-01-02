import { TController } from "../types";

export interface IControllerRoute {
    path: string;
    controller: TController,
    children?: IControllerRoute[]
}