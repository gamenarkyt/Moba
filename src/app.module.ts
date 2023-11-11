import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [AuthModule, UsersModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [PrismaModule]
})
export class AppModule {}


// controllers: [AppController, UsersController],
// providers: [AppService, UsersService, PrismaService],
// exports: [PrismaService]
