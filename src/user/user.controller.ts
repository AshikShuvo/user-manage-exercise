import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Authenticated } from '../guards/auth.guard';
import { ApiTags } from "@nestjs/swagger";
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(Authenticated)
  @Get()
  getUsersWithProfile() {
    return this.userService.getAllUsersWithProfile();
  }
}
