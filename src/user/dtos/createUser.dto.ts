import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    name: 'email',
    example: 'ashikshuvo@gmail.com',
    required: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    name: 'password',
    example: '123456',
    required: true,
    minLength: 5,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  password: string;
}
