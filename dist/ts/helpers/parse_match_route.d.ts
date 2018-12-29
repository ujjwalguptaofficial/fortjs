import { RouteMatch } from "../types/route_match";
import { HTTP_METHOD } from "../enums";
export declare const parseAndMatchRoute: (url: string, reqMethod: HTTP_METHOD) => RouteMatch;
