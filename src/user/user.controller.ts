import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Authenticated } from '../guards/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(Authenticated)
  @Get()
  getUsersWithProfile() {
    return this.userService.getAllUsersWithProfile();
  }
}
