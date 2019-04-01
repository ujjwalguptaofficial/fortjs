import { Fort } from 'fortjs';
import { routes } from './routes';
import { EjsViewEngine } from './ejs_view_engine';


export class App extends Fort {
    constructor() {
        super();
        this.routes = routes;
        this.viewEngine = EjsViewEngine;
    }
}


