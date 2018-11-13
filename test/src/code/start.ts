import * as fort from "fortjs";
import { FortViewEngine } from "eshtml";
export const initApp = () => {
    fort.start({
        port: 8080,
        foldersAllowed: ["contents"],
        viewEngine: FortViewEngine
    })
    console.log(`server runing at 8080`);
}
initApp();