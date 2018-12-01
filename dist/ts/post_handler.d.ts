import { ControllerHandler } from "./controller_handler";
export declare class PostHandler extends ControllerHandler {
    protected body: any;
    protected files: {};
    protected getPostRawData_(): Promise<{}>;
    protected handlePostData(): Promise<any>;
}
