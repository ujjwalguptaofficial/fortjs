import { App } from "./app";
import * as path from "path";

const app = new App();
app.create({
    folders: [{
        alias: "/",
        path: path.join(__dirname, "../static")
    }]
}).then(async () => {
    console.log("Your fort is located at address - localhost:4000");
    // connect with mongodb 
    await app.initDatabase();
}).catch(err => {
    console.error(err);
});
