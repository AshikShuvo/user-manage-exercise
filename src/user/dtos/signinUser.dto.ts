import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SigninUserDto {
  @ApiProperty({
    name: 'email',
    example: 'ashikshuvo@gmail.com',
    required: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    name: 'password',
    example: '12343432',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
