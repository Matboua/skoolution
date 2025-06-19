import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailerService } from './mailer/mailer.service';
import { MongooseModule } from "@nestjs/mongoose"
import { StudentModule } from './student/student.module';
import { ParetModule } from './paret/paret.module';
import * as dotenv from "dotenv";
import { JwtModule } from '@nestjs/jwt';
dotenv.config();
@Module({
  imports: [UserModule, MailerModule.forRoot({
    transport: {
      host: process.env.EMAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    },
  }), MongooseModule.forRoot("mongodb://localhost:27017/"), StudentModule, ParetModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWTKEY,
      signOptions: { expiresIn: "1s" }
    })],
  controllers: [AppController],
  providers: [AppService, MailerService],
})
export class AppModule { }
console.log(process.env.EMAIL_HOST);
