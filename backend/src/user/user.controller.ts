import { Body, Controller, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { user } from 'types/userTypes';
import { signUPDto } from './DTO\'s/signUp.dto.ts';
import { loginDTO } from './DTO\'s/logIn.dto';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Post()
  signUP(@Body() user: signUPDto, @Res() res: Response) {
    try {
      const token = this.userService.signup(user);
      return res.status(200).json({token})
    } catch (error) {
      console.log(error);
    }
  }
  @Post()
  logIn(@Body() user: loginDTO, @Res() res: Response) {
    try {
      
    } catch (error) {
      console.log(error);
    }
  }
}
