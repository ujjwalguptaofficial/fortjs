import { DefaultController } from "./controllers/default_controller";
import { RandomController } from "./controllers/random_controller";
import { UserController } from "./controllers/user_controller";
import { CookieController } from "./controllers/cookie_controller";
import { SessionController } from "./controllers/session_controller";
import { ParentRoute } from "fortjs";

export const routes: ParentRoute[] = [{
    controller: DefaultController,
    path: "/default"
}, {
    controller: RandomController,
    path: "random"
}, {
    controller: UserController,
    path: "/user"
}, {
    controller: CookieController,
    path: "/cookie/"
}, {
    controller: SessionController,
    path: "/session"
}];