import { Controller, Guard, Shield, Wall, XmlParser } from '../abstracts';
import { IHttpResult, ISessonStore } from '../interfaces';
import { ErrorHandler } from '../models';

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