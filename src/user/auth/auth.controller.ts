import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/createUser.dto';
import { AuthService } from './auth.service';
import { SigninUserDto } from '../dtos/signinUser.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthResponseDto } from '../dtos/authResponse.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 401, description: 'credential dose not match' })
  @ApiBody({
    type: CreateUserDto,
    description: 'Json structure for user object',
  })
  signUpUser(@Body() data: CreateUserDto): Promise<AuthResponseDto> {
    return this.authService.signUpUser(data);
  }

  @Post('/signin')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 401, description: 'credential dose not match' })
  @ApiBody({
    type: CreateUserDto,
    description: 'Json structure for user object',
  })
  signinUser(@Body() data: SigninUserDto): Promise<AuthResponseDto> {
    return this.authService.signinUser(data);
  }
}
