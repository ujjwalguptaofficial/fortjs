import { DefaultController } from "./controllers/default_controller";
import { UserController } from "./controllers/user_controller";

export const routes = [{
    path: "/default",
    controller: DefaultController
},{
    path: "/user", 
    controller: UserController
}]