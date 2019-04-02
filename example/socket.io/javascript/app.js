import {
    Fort,
    MustacheViewEngine
} from 'fortjs';
import {
    routes
} from './routes';
import * as socketIo from "socket.io";

export class App extends Fort {
    constructor() {
        super();
        this.routes = routes;
        this.viewEngine = MustacheViewEngine;
    }

    initSocketIo() {
        const io = socketIo(this.httpServer);
        io.on("connection", (socket) => {
            console.log("user connected");
            socket.on('disconnect', () => {
                console.log('user disconnected');
            });

            socket.on('chat message', (msg) => {
                console.log(`message is ${msg}`);
            });
        });
    }
}