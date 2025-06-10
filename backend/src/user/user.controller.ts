import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { user } from 'types/userTypes';
import { signUPDto } from './DTO\'s/signUp.dto.ts';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Post()
  signUP(@Body() user: signUPDto) {
    try {
      const token = this.userService.signup(user);
      return token
    } catch (error) {
      console.log(error);
    }
  }
}
