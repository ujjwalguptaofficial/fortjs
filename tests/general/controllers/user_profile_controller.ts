import { Controller, worker, route, jsonResult, singleton, shields } from "fortjs";
import { UserService } from "../services/user_service";
import { UserProfileNestedShield, UserProfileShield } from "../shields/user_profile_shield";

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

@shields(UserProfileNestedShield)
export class UserProfileNestedController extends Controller {

    @worker()
    @route('/me')
    async getMe(@singleton(UserService) userService: UserService) {
        const userId = await this.session.get('userId');
        const user = userService.getUser(userId);
        return jsonResult({
            nestedProfile: user
        });
    }
}

// do not remove this - 
// this to make sure that controller which is not used but created are not creating problem
@shields(UserProfileNestedShield)
export class NotUsedController extends Controller {

    @worker()
    @route('/me')
    async getMe(@singleton(UserService) userService: UserService) {
        const userId = await this.session.get('userId');
        const user = userService.getUser(userId);
        return jsonResult({
            nestedProfile: user
        });
    }
}