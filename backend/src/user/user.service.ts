import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { user } from 'types/userTypes';
import { signUPDto } from './DTO\'s/signUp.dto.ts';
import { HashUtil } from '../../helpers/hash.util.js';

@Injectable()
export class UserService {
    constructor(
        private jwtService: JwtService,
        @InjectModel(User.name) private UserModel: Model<UserDocument>
    ) {
    }
    async signup(payload: signUPDto) {
        try {
            const exist = await this.UserModel.findOne({ mail: payload.mail })
            if (exist) {
                return { error: "this email is alredy taken ", success: false }
            }
            const {pwd} = payload
            const hashedPasswored = await HashUtil.hashPassword(pwd);
            const user = await this.UserModel.create({
                nom: payload.nom,
                prenom: payload.prenom,
                mail: payload.mail,
                pwd: hashedPasswored,
                ville: payload.ville,
                tel: payload.tel,
                type: payload.type,
            })
            const token = this.jwtService.sign({ sub: { id: user.id, role: user.type } });
            return { success: true, token };
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
