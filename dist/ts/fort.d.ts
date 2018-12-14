/// <reference types="node" />
import { Route } from "./types/route";
import { Wall } from "./abstracts";
import { AppOption } from "./types";
import * as http from "http";
export declare class Fort {
    routes: Route[];
    walls: Array<typeof Wall>;
    httpServer: http.Server;
    private isArray_;
    private saveAppOption_;
    create(option: AppOption): Promise<any>;
    destroy(): Promise<any>;
}
