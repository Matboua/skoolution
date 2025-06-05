import { UserService } from './user.service';
import { user } from 'types/userTypes';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    Login(user: user): string | undefined;
}
