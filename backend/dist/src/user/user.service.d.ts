import { JwtService } from '@nestjs/jwt';
import { user } from 'types/userTypes';
export declare class UserService {
    private jwtService;
    constructor(jwtService: JwtService);
    login(payload: user): string | undefined;
}
