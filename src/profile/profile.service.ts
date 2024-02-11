import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProfileDto } from './dtos/createProfile.dto';
import { ProfileResponseDto } from './dtos/profileResponse.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prismaService: PrismaService) {}

  async createProfile(data: CreateProfileDto, id: number) {
    const profile = await this.prismaService.profile.create({
      data: {
        ...data,
        user: { connect: { id } },
      },
    });
    return profile;
  }

  async profileByUserId(id: number) {
    const profile = await this.prismaService.profile.findUnique({
      where: { userId: id },
    });
    if (!profile) {
      throw new HttpException('profile not found', 404);
    }
    return new ProfileResponseDto(profile);
  }
}
