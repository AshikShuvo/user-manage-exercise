import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserInterceptor } from './interceptors/user.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [UserModule, PrismaModule, ProfileModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: UserInterceptor,
    },
  ],
})
export class AppModule {}
