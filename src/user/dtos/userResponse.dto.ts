import { ProfileResponseDto } from '../../profile/dtos/profileResponse.dto';
import { Exclude, Expose } from 'class-transformer';
import { Profile } from "@prisma/client";

export class UserResponseDto {
  @Expose()
  id: number;
  @Expose()
  email: string;
  @Exclude()
  password: string;
  @Expose()
  crerated_at: Date;
  @Expose()
  updated_at: Date;
  @Exclude()
  profile: Profile | null;

  @Expose()
  profileInfo() {
    return this.profile ? new ProfileResponseDto(this.profile) : null;
  }

  constructor(partial: Partial<UserResponseDto>) {
    Object.assign(this, partial);
  }
}
