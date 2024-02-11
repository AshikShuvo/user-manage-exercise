import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/createUser.dto';
import { AuthService } from './auth.service';
import { SigninUserDto } from '../dtos/signinUser.dto';
import { User } from '../../decorators/user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signUpUser(@Body() data: CreateUserDto) {
    return this.authService.signUpUser(data);
  }

  @Post('/signin')
  signinUser(@Body() data: SigninUserDto) {
    return this.authService.signinUser(data);
  }

  @Get()
  checkMe(@User() data: { id: string; email: string }) {
    console.log(data);
    return data;
  }
}
