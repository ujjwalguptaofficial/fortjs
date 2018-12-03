/// <reference types="node" />
import { Route } from "./types/route";
import { Wall } from "./abstracts";
import { AppOption } from "./types";
import * as http from "http";
export declare class Fort {
    routes: Route[];
    walls: typeof Wall[];
    httpServer: http.Server;
    private saveAppOption_;
    create(option: AppOption): void;
    destroy(): Promise<{}>;
}
