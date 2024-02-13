import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserInterceptor } from './interceptors/user.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [UserModule, PrismaModule, ProfileModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: UserInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
