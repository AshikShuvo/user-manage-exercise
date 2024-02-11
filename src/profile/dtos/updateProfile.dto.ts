import { IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

export class UpdateProfileDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Matches(/^(\+880|0)(\s)?(1[3456789]{1})(\s)?(\d{8})$/, {
    message: 'phone must be a valid phone number',
  })
  phoneNumber: string;
}
