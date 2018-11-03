import { Controller, declareController, ActionResult, TextResult, JsonResult, HtmlResult, action, HTTP_METHOD, guard } from "infinity";
import { AuthenticationGuard } from "../guards/authentication_guard";

const authGuardObj = new AuthenticationGuard();
@declareController()
@guard([authGuardObj])
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