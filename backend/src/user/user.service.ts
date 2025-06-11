import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { user } from 'types/userTypes';

@Injectable()
export class UserService {
    constructor(private jwtService: JwtService) { }
    signup(payload: user) {
        try {
            // add sign up logic befor creating the token 
            return this.jwtService.sign({ sub: { id: payload.id, role: payload.type } });
        } catch (error) {
            console.log(error);
        }
    }
    login() {
        try {
            // mkae the rest of the of the logic here 
            const user = { id: 12323, type: "something " }
            return this.jwtService.sign({ sub: { id: user.id, role: user.type } });
        } catch (error) {
            console.log(error);
        }
    }
}
