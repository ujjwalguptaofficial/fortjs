/// <reference types="node" />
import { Router } from "./types/router";
import { FortWall } from "./abstracts";
import { AppOption } from "./types";
import * as http from "http";
export declare class Fort {
    routers: Router[];
    walls: typeof FortWall[];
    httpServer: http.Server;
    create(option: AppOption): void;
    destroy(): Promise<{}>;
}
