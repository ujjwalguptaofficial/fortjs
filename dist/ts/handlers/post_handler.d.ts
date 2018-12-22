import { ControllerHandler } from "./controller_handler";
import { FileManager } from "../model/file_manager";
export declare class PostHandler extends ControllerHandler {
    protected body: any;
    protected file: FileManager;
    protected getPostRawData_(): Promise<{}>;
    private parseMultiPartData_;
    protected parsePostData(): Promise<any>;
}
