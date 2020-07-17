import { UserService } from "../services/user_service";
import { Controller, Singleton, textResult } from "fortjs";

export class WebPushController extends Controller {

    service: UserService;
    constructor() {
        super();
    }

    sendNotification(@Singleton(UserService) service) {
        console.log('send notification')
        return textResult("notification sent");
    }
}