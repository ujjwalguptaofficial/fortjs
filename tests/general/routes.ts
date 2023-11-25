import { HomeController } from "./controllers/home_controller";
import { RandomController } from "./controllers/random_controller";
import { UserController } from "./controllers/user_controller";
import { CookieController } from "./controllers/cookie_controller";
import { SessionController } from "./controllers/session_controller";
import { IControllerRoute } from "fortjs";
import { DefaultController } from "./controllers/default_controller";
import { InjectionController } from "./controllers/injection_controller";
import { ExpectController } from "./controllers/expect_controller";
import { RouteController } from "./controllers/route_controller";
import { WebPushController } from "./controllers/web_push_controller";
import { EmptyController } from "./controllers/empty_controller";

export const routes: IControllerRoute[] = [{
    controller: DefaultController,
    path: "/*"
}, {
    controller: HomeController,
    path: "/home"
}, {
    controller: RandomController,
    path: "/random"
}, {
    controller: UserController,
    path: "/user"
}, {
    controller: CookieController,
    path: "/cookie/"
}, {
    controller: SessionController,
    path: "/session"
}, {
    controller: InjectionController,
    path: "/injection"
}, {
    controller: ExpectController,
    path: "/expect"
}, {
    controller: RouteController,
    path: "/api/routes"
},
{
    controller: WebPushController,
    path: "/api/webpush"
},
{
    controller: EmptyController,
    path: "/empty"
}
];