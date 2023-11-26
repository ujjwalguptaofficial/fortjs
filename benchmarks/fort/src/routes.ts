import { DefaultController } from "@/controllers/default_controller";
import { IControllerRoute } from "fortjs";

export const routes: IControllerRoute[] = [{
    path: "/*",
    controller: DefaultController
}];