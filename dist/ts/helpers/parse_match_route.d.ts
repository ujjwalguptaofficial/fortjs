import { RouteMatch } from "../types/route_match";
import { HTTP_METHOD } from "../enums";
export declare function parseAndMatchRoute(url: string, httpMethod: HTTP_METHOD): RouteMatch;
