import { Controller, ScheduleTask, Guard, Shield, Wall, XmlParser } from '../abstracts';
import { ICacheStore, IControllerRoute, IHttpResult, ISessonStore, ITaskScheduler } from '../interfaces';
import { ErrorHandler } from '../models';

export * from './http_format_result';

export type ErrorResultMapper = (error: any) => IHttpResult;
type Class<I, Args extends any[] = any[]> = new (...args: Args) => I;

// support for old versions
export type ParentRoute = IControllerRoute;
export type TComponentQuery = { [key: string]: any };

export type TSessionStore = Class<ISessonStore, [string]>;
export type TCacheStore = Class<ICacheStore, []>;
export type TController = Class<Controller>;
export type TGuard = Class<Guard>;
export type TShield = Class<Shield>;
export type TWall = Class<Wall>;
export type TXmlParser = Class<XmlParser, []>;
export type TErrorHandler = Class<ErrorHandler, []>;
export type TTaskScheduler = Class<ITaskScheduler, [ScheduleTask]>;
export type TScheduleTask = Class<ScheduleTask>;