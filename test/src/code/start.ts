import * as Server from "infinity";
export const initApp = () => {
    Server.start({
        port: 8080,
        filesPathAllowed: ["contents"]
    })
    console.log(`server runing at 8080`);
}
initApp();