import { ControllerHandler } from "./controller_handler";
import { FileManager } from "../models";
export declare class PostHandler extends ControllerHandler {
    protected body: any;
    protected file: FileManager;
    private getPostRawData_;
    private parseMultiPartData_;
    protected parsePostData(): Promise<any>;
}
