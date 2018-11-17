/// <reference types="node" />
import * as http from "http";
import { AppOption } from "./types/app_option";
export declare let app: http.Server;
export declare const create: (option: AppOption) => void;
