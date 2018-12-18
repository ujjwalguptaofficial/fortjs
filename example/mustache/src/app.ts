import { Fort } from 'fortjs';
import { routes } from './routes';
import { MoustacheViewEngine } from './view_engine';

export class App extends Fort {
    constructor() {
        super();
        this.routes = routes;
        this.viewEngine = MoustacheViewEngine;
    }
}

new App().create({
    defaultPath: "/default"
});

console.log("Your fort is located at address - localhost:4000");