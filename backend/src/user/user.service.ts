import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { user } from 'types/userTypes';

@Injectable()
export class UserService {
    constructor(private jwtService: JwtService){ }
    login(payload:user) {
        try {
            return this.jwtService.sign(payload);
        } catch (error) {
            console.log(error);
        }
    }
}
