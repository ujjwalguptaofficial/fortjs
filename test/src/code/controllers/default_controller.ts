import { Controller, shields, declareController, ActionResult, TextResult, JsonResult, HtmlResult, action, HTTP_METHOD } from "infinity";
import { AuthenticationShield } from "../guards/authentication_shield";

@declareController()
@shields([AuthenticationShield])
export class DefaultController extends Controller {
    default() {
        console.log(this.query);
    }



    @action([HTTP_METHOD.Get])
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