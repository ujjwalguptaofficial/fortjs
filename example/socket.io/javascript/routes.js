import {
    DefaultController
} from "./controllers/default_controller";

export const routes = [{
    path: "*",
    controller: DefaultController
}]