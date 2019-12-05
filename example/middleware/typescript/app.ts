import { Fort, MustacheViewEngine } from 'fortjs';
import { routes } from './routes';
import { HelmetWall } from './walls/helmet_wall';

export class App extends Fort {
    constructor() {
        super();
        this.routes = routes;
        this.viewEngine = MustacheViewEngine;
        this.walls = [HelmetWall];
    }
}


