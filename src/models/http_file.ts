import { IncomingHttpHeaders } from "http2";


export class HttpFile {

    /**
     * same as name - the field name for this file
     */
    fieldName: string;

    /**
     * the filename that the user reports for the file
     */
    fileName: string;

    /**
     * the absolute path of the uploaded file on disk
     */
    // stream: Readable & { truncated?: boolean };

    /**
     * the HTTP headers that were sent along with this file
     */
    headers?: IncomingHttpHeaders;

    /**
     * size of the file in bytes
     */
    size?: number;
}
