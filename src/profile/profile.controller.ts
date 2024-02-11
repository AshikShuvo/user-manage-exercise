import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '../decorators/user.decorator';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dtos/createProfile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  createMyProfile(
    @Body() createProfile: CreateProfileDto,
    @User() user: { id: number; email: string },
  ) {
    return this.profileService.createProfile(createProfile, user.id);
  }

  @Get()
  myProfile(@User() { id }: { id: number; email: string }) {
    return this.profileService.profileByUserId(id);
  }
}
