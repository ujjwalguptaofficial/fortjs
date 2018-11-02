import * as Server from "infinity";
export const initApp = () => {
    // console.log(DefaultController.name)
    Server.start({
        port: 8080
    })
    console.log(`server runing at 8080`);
}
initApp();
//console.log(typeof new Server.App);