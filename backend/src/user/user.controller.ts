import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { user } from 'types/userTypes';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  Login(@Body() user:user){
    // return "ok";
    return this.userService.login(user);
  }
}
