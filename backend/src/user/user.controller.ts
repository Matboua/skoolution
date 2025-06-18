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
  async signUP(@Body() user: signUPDto, @Res() res: Response) {
    try {
      const response = await this.userService.signup(user);
      if (response?.success) {
        return res.status(200).json(response)
      } else {
        return res.status(400).json(response)
      }
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
  async ResetPasswored(){
    await this.mailer.sendMail("elhoubiyoussef@gmail.com");
    return {id:1}
  }
}