import { Module } from '@nestjs/common';
import { JwtModule } from "@nestjs/jwt";
import { UserService } from './user.service';
import { UserController } from './user.controller';
import * as dotenv from "dotenv"
import { MailerService } from 'src/mailer/mailer.service';
dotenv.config();

@Module({
  imports: [
    JwtModule.register({
      secret:process.env.JWTKEY,
      signOptions:{expiresIn:"1s"}
    })
  ],
  controllers: [UserController],
  providers: [UserService,MailerService],
})
export class UserModule { }
