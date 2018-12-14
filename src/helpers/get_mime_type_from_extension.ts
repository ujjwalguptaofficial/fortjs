import { MIME_TYPE } from "../enums";

export const getMimeTypeFromExtension = (ext: string): MIME_TYPE => {
    switch (ext) {
        case ".htm":
        case ".html":
            return MIME_TYPE.Html;
        case ".css":
            return MIME_TYPE.Css;
        case ".js":
            return MIME_TYPE.Js;
        case ".png":
            return MIME_TYPE.Png;
        case ".woff":
            return MIME_TYPE.Woff;
        case ".woff2":
            return MIME_TYPE.Woff2;
        case ".json":
            return MIME_TYPE.Json;
        case ".txt":
            return MIME_TYPE.Text;
        case ".jpg":
        case ".jpeg":
            return MIME_TYPE.Jpeg;
        case ".rtf":
            return MIME_TYPE.Rtf;
        case ".ttf":
            return MIME_TYPE.Ttf;
        case ".eot":
            return MIME_TYPE.Eot;
        case '.otf':
            return MIME_TYPE.Otf;
        case ".swf":
            return MIME_TYPE.Swf;
        case ".avi":
            return MIME_TYPE.Avi;
        case ".Svg":
            return MIME_TYPE.Svg;
        case ".pdf":
            return MIME_TYPE.Pdf;
        case ".xml":
            return MIME_TYPE.Xml;
        case ".csv":
            return MIME_TYPE.Csv;
        case ".xls":
            return MIME_TYPE.Xls;
        case ".xlsx":
            return MIME_TYPE.Xlsx;
        case ".bmp":
            return MIME_TYPE.Bmp;
        case ".gif":
            return MIME_TYPE.Gif;
        default:
            return "application/octet-stream" as MIME_TYPE;
    }
};