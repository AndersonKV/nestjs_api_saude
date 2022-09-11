import { Module } from '@nestjs/common';
import { UsersUpdateService } from './service/users.update.service';
import { UsersController } from './controller/users.controller';
import { PrismaService } from 'src/database/PrismaService';
import { UsersCreateService } from './service/users.create.service';
import { UsersFindService } from './service/users.find.service';
import { UsersDeleteService } from './service/users.delete.service';

@Module({
  controllers: [UsersController],
  providers: [
    UsersCreateService,
    UsersFindService,
    UsersDeleteService,
    UsersUpdateService,
    PrismaService,
  ],
})
export class UsersModule { }
