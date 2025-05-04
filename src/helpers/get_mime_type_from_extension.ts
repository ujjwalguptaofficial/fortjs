import { MIME_TYPE } from "../enums";
import { lookup } from "mime-types";

// const extensionToMimeTypeMap: Record<string, MIME_TYPE> = {
//     // HTML & Web
//     ".htm": MIME_TYPE.Html,
//     ".html": MIME_TYPE.Html,
//     ".css": MIME_TYPE.Css,
//     ".js": MIME_TYPE.Js,
//     ".json": MIME_TYPE.Json,
//     ".xml": MIME_TYPE.Xml,
//     ".txt": MIME_TYPE.Text,
//     ".csv": MIME_TYPE.Csv,
//     ".pdf": MIME_TYPE.Pdf,
//     ".rtf": MIME_TYPE.Rtf,

//     // Images
//     ".png": MIME_TYPE.Png,
//     ".jpg": MIME_TYPE.Jpeg,
//     ".jpeg": MIME_TYPE.Jpeg,
//     ".bmp": MIME_TYPE.Bmp,
//     ".gif": MIME_TYPE.Gif,
//     ".svg": MIME_TYPE.Svg,
//     ".webp": MIME_TYPE.Webp,

//     // Fonts
//     ".woff": MIME_TYPE.Woff,
//     ".woff2": MIME_TYPE.Woff2,
//     ".ttf": MIME_TYPE.Ttf,
//     ".eot": MIME_TYPE.Eot,
//     ".otf": MIME_TYPE.Otf,

//     // Video & Animation
//     ".swf": MIME_TYPE.Swf,
//     ".avi": MIME_TYPE.Avi,

//     // Spreadsheets
//     ".xls": MIME_TYPE.Xls,
//     ".xlsx": MIME_TYPE.Xlsx,
// };

export const getMimeTypeFromExtension = (ext: string): MIME_TYPE => {
    return lookup(ext) || 'application/octet-stream' as MIME_TYPE;
};
