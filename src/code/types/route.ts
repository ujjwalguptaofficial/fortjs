import { Controller } from "../abstracts";

export type Route = {
    path: string;
    controller: typeof Controller
}