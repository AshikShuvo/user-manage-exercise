import { Body, Controller, Get, Post, Put, UseGuards } from '@nestjs/common';
import { User } from '../decorators/user.decorator';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dtos/createProfile.dto';
import { UpdateProfileDto } from './dtos/updateProfile.dto';
import { Authenticated } from '../guards/auth.guard';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(Authenticated)
  @Post()
  createMyProfile(
    @Body() createProfile: CreateProfileDto,
    @User() user: { id: number; email: string },
  ) {
    return this.profileService.createProfile(createProfile, user.id);
  }

  @UseGuards(Authenticated)
  @Get()
  myProfile(@User() { id }: { id: number; email: string }) {
    return this.profileService.profileByUserId(id);
  }

  @UseGuards(Authenticated)
  @Put()
  updateProfile(
    @Body() data: UpdateProfileDto,
    @User() { id }: { id: number; email: string },
  ) {
    return this.profileService.updateProfile(data, id);
  }
}
