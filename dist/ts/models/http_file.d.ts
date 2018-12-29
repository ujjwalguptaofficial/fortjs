export declare class HttpFile {
    /**
     * same as name - the field name for this file
     */
    fieldName: string;
    /**
     * the filename that the user reports for the file
     */
    originalFileName: string;
    /**
     * the absolute path of the uploaded file on disk
     */
    path: string;
    /**
     * the HTTP headers that were sent along with this file
     */
    headers: any;
    /**
     * size of the file in bytes
     */
    size: number;
}
