import { Router } from "./types/router";
import { FortWall } from "./abstracts";
import { AppOption } from "./types";
export declare class Fort {
    routers: Router[];
    walls: typeof FortWall[];
    create(option: AppOption): void;
}
