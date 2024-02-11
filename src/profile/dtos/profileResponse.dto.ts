import { Exclude, Expose } from 'class-transformer';

export class ProfileResponseDto {
  @Expose()
  id: number;

  @Exclude()
  firstName: string;

  @Exclude()
  lastName: string;

  @Expose()
  fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  @Expose()
  address: string;

  @Expose()
  phoneNumber: string;

  @Exclude()
  userId: number;

  @Exclude()
  crerated_at: Date;

  @Exclude()
  updated_at: Date;

  constructor(partial: Partial<ProfileResponseDto>) {
    Object.assign(this, partial);
  }
}
