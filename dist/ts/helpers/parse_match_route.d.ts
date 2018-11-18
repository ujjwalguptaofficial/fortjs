import { IRouteMatch } from "../interfaces/route_match";
import { HTTP_METHOD } from "../enums";
export declare function parseAndMatchRoute(url: string, reqMethod: HTTP_METHOD): IRouteMatch;
