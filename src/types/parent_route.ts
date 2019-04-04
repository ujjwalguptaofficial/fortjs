import { Controller } from "../abstracts";

export type ParentRoute = {
    path: string;
    controller: typeof Controller
};