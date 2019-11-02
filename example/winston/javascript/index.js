import * as path from "path";
import {
    App
} from "./app";

const app = new App();
app.create({
    folders: [{
        alias: "/",
        path: path.join(__dirname, "../static")
    }]
}).then(() => {
    app.logger.debug("Your fort is located at address - localhost:4000");
}).catch(err => {
    console.error(err);
})