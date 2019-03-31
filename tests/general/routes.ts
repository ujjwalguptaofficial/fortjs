import { DefaultController } from "./controllers/default_controller";
import { Route } from "fortjs/dist/ts/types/route";
import { RandomController } from "./controllers/random_controller";
import { UserController } from "./controllers/user_controller";
import { CookieController } from "./controllers/cookie_controller";

export const routes: Route[] = [{
    controller: DefaultController,
    path: "/default"
}, {
    controller: RandomController,
    path: "/random"
}, {
    controller: UserController,
    path: "/user"
}, {
    controller: CookieController,
    path: "/cookie"
}];