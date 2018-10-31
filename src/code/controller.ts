import * as http from "http";
export abstract class Controller {
    request: http.IncomingMessage;
    response: http.ServerResponse;
}