import { IsString, Matches } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @Matches(/^(\+880|0)(\s)?(1[3456789]{1})(\s)?(\d{8})$/, {
    message: 'phone must be a valid phone number',
  })
  phoneNumber: string;

  @IsString()
  address: string;
}
