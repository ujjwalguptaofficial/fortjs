import { Fort, MustacheViewEngine } from 'fortjs';
import { routes } from './routes';
import * as mongoose from "mongoose";

export class App extends Fort {
    constructor() {
        super();
        this.routes = routes;
        this.viewEngine = MustacheViewEngine;
    }

    async initDatabase() {
        await mongoose.connect("mongodb://127.0.0.1:27017/mydb", { useNewUrlParser: true });
    }
}


