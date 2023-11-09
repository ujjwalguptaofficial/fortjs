import { HTTP_METHOD } from "../enums";
import { route } from "./route";
import { worker } from "./worker";
import { wrapMethodDecorator } from "./wrap_method_decorator";

// tslint:disable-next-line
function get(target, key: string): void;
function get(route: string): MethodDecorator;
function get(...args) {
    return wrapMethodDecorator(args, createWorkerForGet);
}

// tslint:disable-next-line
function post(target, key: string): void;
function post(route: string): MethodDecorator;
function post(...args) {
    return wrapMethodDecorator(args, createWorkerForPost);
}

// tslint:disable-next-line
function del(target, key: string): void;
function del(route: string): MethodDecorator;
function del(...args) {
    return wrapMethodDecorator(args, createWorkerForDelete);
}

// tslint:disable-next-line
function patch(target, key: string): void;
function patch(route: string): MethodDecorator;
function patch(...args) {
    return wrapMethodDecorator(args, createWorkerForPatch);
}

// tslint:disable-next-line
function put(target, key: string): void;
function put(route: string): MethodDecorator;
function put(...args) {
    return wrapMethodDecorator(args, createWorkerForPut);
}

function registerWorkerAndCreate(target, methodName, httpMethod: HTTP_METHOD, routes: string[]) {
    const routeArg = (routes.length === 0 ? null : routes[0]);
    (worker as any)(httpMethod)(
        target, methodName, null as any
    );
    route(routeArg)(target, methodName, null as any);
}

function createWorkerForGet(target: any, methodName: string, ...routes: string[]) {
    registerWorkerAndCreate(target, methodName, HTTP_METHOD.Get, routes);
}

function createWorkerForPost(target: any, methodName: string, ...routes: string[]) {
    registerWorkerAndCreate(target, methodName, HTTP_METHOD.Post, routes);
}

function createWorkerForPatch(target: any, methodName: string, ...routes: string[]) {
    registerWorkerAndCreate(target, methodName, HTTP_METHOD.Patch, routes);
}

function createWorkerForPut(target: any, methodName: string, ...routes: string[]) {
    registerWorkerAndCreate(target, methodName, HTTP_METHOD.Put, routes);
}

function createWorkerForDelete(target: any, methodName: string, ...routes: string[]) {
    registerWorkerAndCreate(target, methodName, HTTP_METHOD.Delete, routes);
}

export const http = {
    get, post, delete: del,
    patch, put
}