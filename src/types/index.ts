import { Controller, Guard, Shield, Wall, XmlParser } from '../abstracts';
import { IHttpResult, ISessonStore } from '../interfaces';
import { ErrorHandler } from '../models';

export * from './view_engine_data';
export * from './http_request';
export * from './http_response';
export * from './parent_route';
export * from "./session_value";
export * from "../interfaces/worker_info";
export * from "./etag_option";
export * from "./folder_map";
export * from "./multi_part_parse_result";
export * from "./file_result_info";
export * from "./route_match";
export * from './controller_test_data';
export * from './view_read_option';
export * from './http_format_result';

export type ErrorResultMapper = (error: any) => IHttpResult;
type Class<I, Args extends any[] = any[]> = new (...args: Args) => I;
export type TSessionStore = Class<ISessonStore, [string]>;
export type TController = Class<Controller>;
export type TGuard = Class<Guard>;
export type TShield = Class<Shield>;
export type TWall = Class<Wall>;
export type TXmlParser = Class<XmlParser, []>;
export type TErrorHandler = Class<ErrorHandler, []>;