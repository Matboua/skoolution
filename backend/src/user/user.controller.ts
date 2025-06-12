import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { user } from 'types/userTypes';
import { signUPDto } from './DTO\'s/signUp.dto.ts';
import { loginDTO } from './DTO\'s/logIn.dto';
import { Response } from 'express';
import { MailerService } from 'src/mailer/mailer.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService,private readonly mailer:MailerService) { }
  @Post("signup")
  signUP(@Body() user: signUPDto, @Res() res: Response) {
    try {
      const token = this.userService.signup(user);
      return res.status(200).json({token})
    } catch (error) {
      console.log(error);
    }
  }
  @Post("login")
  logIn(@Body() user: loginDTO, @Res() res: Response) {
    try {
      
    } catch (error) {
      console.log(error);
    }
  }
  @Get()
  ResetPasswored(){
    // this.mailer.sendMail("elhoubiyoussef@gmail.com");
  }
}