export enum HTTP_STATUS_CODE {
    Not_Found = 404,
    Ok = 200,
    Internal_Server_Error = 500,
    Bad_Request = 400,
    MethodNotAllowed = 405,
    Forbidden = 403
}

export enum ERROR_TYPE {
    InvalidControllerName = "invalid_controller_name",
    InvalidContentType = "invalid_content_type"
}

export enum HTTP_METHOD {
    Get = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH"
}

export enum MIME_TYPE {
    Text = "text/plain",
    Json = "application/json",
    Html = "text/html",
    Form_Url_Encoded = "application/x-www-form-urlencoded"
}

export enum File_Extension {
    Ico = ".ico",
    Html = ".html",
    Js = ".js",
    Json = ".json",
    Css = ".css",
    Png = ".png",
    Jpg = ".jpg",
    Wav = ".wav",
    Mp3 = ".mp3",
    Svg = ".svg",
    Pdf = ".pdf",
    Doc = ".doc",
    Eot = ".eot",
    Ttf = ".ttf"
}