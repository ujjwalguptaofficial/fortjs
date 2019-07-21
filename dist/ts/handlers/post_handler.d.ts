import { ControllerResultHandler } from "./controller_result_handler";
import { FileManager } from "../models";
export declare class PostHandler extends ControllerResultHandler {
    protected body: any;
    protected file: FileManager;
    private getPostRawData_;
    private parseMultiPartData_;
    protected parsePostData(): Promise<any>;
}
