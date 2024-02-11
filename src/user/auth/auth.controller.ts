import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/createUser.dto';
import { AuthService } from "./auth.service";
import { SigninUserDto } from "../dtos/signinUser.dto";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }
  @Post('/signup')
  signUpUser(@Body() data: CreateUserDto) {
    return this.authService.signUpUser(data);
  }

  @Post('/signin')
  signinUser(@Body() data: SigninUserDto){
    return this.authService.signinUser(data);
  }
}
