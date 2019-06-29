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
    console.log("Your fort is located at address - localhost:4000");
}).catch(err => {
    console.error(err);
})