import { Controller } from "./controller";
import { SessionProvider } from "./session_provider";
import { CookieManager } from "../models/cookie_manager";
import { HttpResult } from "../types";
import { HttpRequest } from "../types/http_request";
import { HttpResponse } from "../types/http_response";
import { HttpFile } from "../models/http_file";
import { FileManager } from "../models/file_manager";

export abstract class Shield implements Controller {
    request: HttpRequest;
    response: HttpResponse;
    query: { [key: string]: string };
   
    session: SessionProvider;
    cookie: CookieManager;
    
    data: { [key: string]: any };

    abstract protect(): Promise<HttpResult>;
}

