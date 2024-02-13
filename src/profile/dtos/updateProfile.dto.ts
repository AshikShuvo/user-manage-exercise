import { IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfileDto {
  @ApiProperty({
    name: 'firstName',
    example: 'Ashik Ahmmed',
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({
    name: 'lastName',
    example: 'Shuvo',
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({
    name: 'address',
    example: 'Nikunja 2, Dhaka',
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({
    name: 'phoneNumber',
    example: '+8801730959501',
    required: false,
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Matches(/^(\+880|0)(\s)?(1[3456789]{1})(\s)?(\d{8})$/, {
    message: 'phone must be a valid phone number',
  })
  phoneNumber: string;
}
