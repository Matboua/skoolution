import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { user } from 'types/userTypes';
import { signUPDto } from './DTO\'s/signUp.dto.ts';
import { HashUtil } from '../../helpers/hash.util.js';
import { loginDTO } from './DTO\'s/logIn.dto.js';
import { ResetPasswordDto } from 'src/dto/ResetPasswordDto.dto.js';

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
            const { pwd } = payload
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
    async login(payload: loginDTO) {
        try {
            const user = await this.UserModel.findOne({ mail: payload.email });

            if (!user) {
                return { error: "Email not found", success: false };
            }

            const isMatch = await HashUtil.comparePasswords(payload.pwd, user.pwd);
            if (!isMatch) {
                return { error: "Invalid password", success: false };
            }

            const token = this.jwtService.sign({
                sub: { id: user.id, role: user.type },
            });

            return { success: true, token };
        } catch (error) {
            console.log(error);
            return { error: "An error occurred during login", success: false };
        }
    }
    async resetPassword(dto: ResetPasswordDto) {
        const { userId, newPassword, confirmPassword } = dto;

        if (newPassword !== confirmPassword) {
            return { success: false, error: 'Passwords do not match' };
        }

        const user = await this.UserModel.findById(userId);
        if (!user) {
            return { success: false, error: 'User not found' };
        }

        const hashed = await HashUtil.hashPassword(newPassword);
        user.pwd = hashed;
        await user.save();

        return { success: true, message: 'Password updated successfully' };
    }

}
