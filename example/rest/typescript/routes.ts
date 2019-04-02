import { DefaultController } from "./controllers/default_controller";
import { Route } from "fortjs/dist/ts/types/route";
import { UserController } from "./controllers/user_controller";

export const routes: Route[] = [{
    path: "/default",
    controller: DefaultController
}, {
    path: "/user",
    controller: UserController
}];