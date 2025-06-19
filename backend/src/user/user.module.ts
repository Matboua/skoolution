import { Module } from '@nestjs/common';
import { JwtModule } from "@nestjs/jwt";
import { UserService } from './user.service';
import { UserController } from './user.controller';
import * as dotenv from "dotenv"
import { MailerService } from 'src/mailer/mailer.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [UserController],
  providers: [UserService, MailerService],
})
export class UserModule { }
