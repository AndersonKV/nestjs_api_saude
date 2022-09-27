import { Module } from '@nestjs/common';
import { UserUpdateService } from './service/user.update.service';
import { PrismaService } from '../../database/PrismaService';
import { UserCreateService } from './service/user.create.service';
import { UserFindService } from './service/user.find.service';
import { UserDeleteService } from './service/user.delete.service';
import { UserFindController } from './controller/user.find.controller';
import { UserUpdateController } from './controller/user.update.controller';
import { UserDeleteController } from './controller/user.delete.controller';
import { UserCreateController } from './controller/user.create.controller';

@Module({
  controllers: [
    UserCreateController,
    UserFindController,
    UserUpdateController,
    UserDeleteController,
  ],
  providers: [
    UserCreateService,
    UserFindService,
    UserDeleteService,
    UserUpdateService,
    PrismaService,
  ],
})
export class UsersModule { }
