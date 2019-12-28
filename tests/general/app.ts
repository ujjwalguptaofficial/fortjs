import { Fort, Router, ViewEngine } from 'fortjs';
import { routes } from './routes';
import * as Path from "path";
import { RequestLogger } from './walls/request_logger';
import { CustomErrorHandler } from './extra/custom_error_handler';
import { MustacheViewEngine } from 'fortjs';
import { Wall1 } from './walls/wall1';
import { WallWithoutOutgoing } from './walls/wall_without_outgoing';
import { ResultMapper } from './extra/result_mapper';

export class App extends Fort {
    errorHandler = CustomErrorHandler;
    constructor() {
        super();
        this.routes = routes;
        this.resultMapper = ResultMapper;
        // this.viewEngine = MustacheViewEngine;
        this.walls = [RequestLogger, Wall1, WallWithoutOutgoing];
    }
}
