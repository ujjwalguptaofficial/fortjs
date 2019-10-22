import { Fort, MustacheViewEngine } from 'fortjs';
import { routes } from './routes';
 

export class App extends Fort {
    constructor() {
        super();
        this.routes = routes;
        this.viewEngine = MustacheViewEngine;
    }
}


