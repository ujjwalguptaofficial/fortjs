import {
    DefaultController
} from "./controllers/default_controller";
import {
    UserController
} from "./controllers/user_controller";

export const routes = [{
    path: "/*",
    controller: DefaultController
}, {
    path: "/user",
    controller: UserController
}]