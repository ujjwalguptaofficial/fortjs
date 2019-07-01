import { DefaultController } from "./controllers/default_controller";
import { ParentRoute } from "fortjs";
import { UserController } from "./controllers/user_controller";

export const routes: ParentRoute[] = [{
    path: "/*",
    controller: DefaultController
}, {
    path: "/user",
    controller: UserController
}];