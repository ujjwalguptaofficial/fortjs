import * as http from "http";
import { Global } from "./global";
import { IOption } from "./interfaces";
import { Util } from "./util";
import { RequestHandler } from "./request_handler";


export function start(option: IOption) {
    Global.port = Util.isNull(option.port) ? 4000 : option.port;
    Global.viewEngine = option.viewEngine;
    http.createServer((req, res) => {
        new RequestHandler(req, res).handle();
    }).listen(Global.port);
}

