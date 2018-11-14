/// <reference types="node" />
import * as http from "http";
import { IAppOption } from "./interfaces/app_option";
export declare let app: http.Server;
export declare function create(option: IAppOption): void;
