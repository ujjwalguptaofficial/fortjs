import { Controller, declareController, ActionResult, TextResult, JsonResult, HtmlResult, action, HTTP_METHOD } from "infinity";

@declareController()
export class DefaultController extends Controller {
    default() {
        console.log(this.query);
        this.response.end(`${JSON.stringify(this.query)}`);
    }

    @action([HTTP_METHOD.POST])
    text(): ActionResult {
        return new TextResult("Hey this is text mate");
    }

    json(): ActionResult {
        return new JsonResult({ key: 'ass', value: 'ass' });
    }

    html(): ActionResult {
        return new HtmlResult('<h1>Hey i am html</h1>');
    }

    post(): ActionResult {
        return new JsonResult({
            body: this.body
        });
    }
}