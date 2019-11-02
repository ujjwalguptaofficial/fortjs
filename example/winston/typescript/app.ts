import { Fort, MustacheViewEngine } from 'fortjs';
import { routes } from './routes';
import { MyLogger } from './logger';
 

export class App extends Fort {
    constructor() {
        super();
        this.routes = routes;
        this.viewEngine = MustacheViewEngine;
        this.logger = new MyLogger();
    }
}


