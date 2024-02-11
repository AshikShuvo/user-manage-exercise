import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  providers: [UserService, AuthService],
  controllers: [AuthController],
})
export class UserModule {}
