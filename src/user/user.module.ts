import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UserController } from './user.controller';

@Module({
  providers: [UserService, AuthService],
  controllers: [AuthController, UserController],
  imports: [PrismaModule],
})
export class UserModule {}
