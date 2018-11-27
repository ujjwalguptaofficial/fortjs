import { Controller } from "../abstracts";

export type Router = {
    path: string;
    controller: typeof Controller
}