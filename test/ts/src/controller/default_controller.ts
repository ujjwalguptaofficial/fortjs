import { Controller, declareController, ActionResult, TextResult, JsonResult, HtmlResult } from "server";

@declareController()
export class DefaultController extends Controller {
    default() {
        this.response.end("hey there, you got me");
    }

    text(): ActionResult {
        return new TextResult("Hey this is text mate");
    }

    json(): ActionResult {
        return new JsonResult({ key: 'ass', value: 'ass' });
    }

    html():ActionResult{
        return new HtmlResult('<h1>Hey i am html</h1>');
    }
}