import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProfileDto } from './dtos/createProfile.dto';
import { ProfileResponseDto } from './dtos/profileResponse.dto';
import { UpdateProfileDto } from './dtos/updateProfile.dto';

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

  async updateProfile(data: UpdateProfileDto, id: number) {
    const { firstName, lastName, phoneNumber, address } = data;
    const payload = {
      ...(firstName && { firstName }),
      ...(lastName && { lastName }),
      ...(phoneNumber && { phoneNumber }),
      ...(address && { address }),
      userId: id,
    };
    const checkIfUserHasProfile = await this.profileByUserId(id);
    if (!checkIfUserHasProfile) {
      throw new HttpException('Profile not Found', 404);
    }
    const updatedProfile = await this.prismaService.profile.update({
      data: { ...payload },
      where: { id: checkIfUserHasProfile.id },
    });
    return new ProfileResponseDto(updatedProfile);
  }
}
