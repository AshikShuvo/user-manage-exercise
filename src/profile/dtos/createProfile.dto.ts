import { IsString, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProfileDto {
  @ApiProperty({
    name: 'firstName',
    example: 'Ashik Ahmmed',
    required: true,
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    name: 'lastName',
    example: 'Shuvo',
    required: true,
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    name: 'phoneNumber',
    example: '+8801730959501',
    required: true,
  })
  @IsString()
  @Matches(/^(\+880|0)(\s)?(1[3456789]{1})(\s)?(\d{8})$/, {
    message: 'phone must be a valid phone number',
  })
  phoneNumber: string;

  @ApiProperty({
    name: 'address',
    example: 'Nikunja 2, Dhaka',
    required: true,
  })
  @IsString()
  address: string;
}
