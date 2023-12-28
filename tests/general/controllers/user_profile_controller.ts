import { Controller, worker, route, jsonResult, singleton, shields } from "fortjs";
import { UserService } from "../services/user_service";
import { UserProfileShield } from "../shields/user_profile_shield";

@shields(UserProfileShield)
export class UserProfileController extends Controller {

    @worker()
    @route('/me')
    async getMe(@singleton(UserService) userService: UserService) {
        const userId = await this.session.get('userId');
        const user = userService.getUser(userId);
        return jsonResult(user);
    }
}