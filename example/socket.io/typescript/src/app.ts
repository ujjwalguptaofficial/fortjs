import { Fort } from 'fortjs';
import { routes } from './routes';
import { FortViewEngine } from 'eshtml';
import * as path from "path";
import * as socketIo from "socket.io";

export class App extends Fort {
    constructor() {
        super();
        this.routes = routes;
        this.viewEngine = FortViewEngine;
    }

    initSocketIo() {
        const io = socketIo(app.httpServer);
        io.on("connection", (socket) => {
            console.log("user connected");
            socket.on('disconnect', () => {
                console.log('user disconnected');
            });

            socket.on('chat message', (msg) => {
                console.log(`message is ${msg}`);
            })
        });
    }
}
const app = new App();
app.create({
    defaultPath: "default",
    folders: [{
        alias: "/",
        path: path.join(__dirname, "../static")
    }]
}).then(() => {
    console.log("Your fort is located at address - localhost:4000");
    app.initSocketIo();
}).catch(err => {
    console.error(err);
})

