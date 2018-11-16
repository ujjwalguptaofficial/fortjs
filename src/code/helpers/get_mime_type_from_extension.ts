import { MIME_TYPE } from "../enums";

export function getMimeTypeFromExtension(ext: string): MIME_TYPE {
    switch (ext) {
        case ".txt":
            return MIME_TYPE.Text;
        case ".png":
            return MIME_TYPE.Png;
        case ".css":
            return MIME_TYPE.Css;
        case ".js":
            return MIME_TYPE.Js;
        case ".json":
            return MIME_TYPE.Json;
        
    }
}