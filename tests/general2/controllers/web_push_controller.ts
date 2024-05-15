import { UserService } from "../services/user_service";
import { Controller, singleton, textResult } from "fortjs";

export class WebPushController extends Controller {

    service: UserService;
    constructor() {
        super();
    }

    sendNotification(@singleton(UserService) service) {
        console.log('send notification')
        return textResult("notification sent");
    }
}