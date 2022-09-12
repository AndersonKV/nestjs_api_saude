import { Module } from '@nestjs/common';
import { UsersUpdateService } from './service/users.update.service';
import { PrismaService } from 'src/database/PrismaService';
import { UsersCreateService } from './service/users.create.service';
import { UsersFindService } from './service/users.find.service';
import { UsersDeleteService } from './service/users.delete.service';
import { UsersCreateController } from './controller/users.controller.spec';
import { UsersFindController } from './controller/users.find.controller';
import { UsersUpdateController } from './controller/users.update.controller';
import { UsersDeleteController } from './controller/users.delete.controller';

@Module({
  controllers: [
    UsersCreateController,
    UsersFindController,
    UsersUpdateController,
    UsersDeleteController,
  ],
  providers: [
    UsersCreateService,
    UsersFindService,
    UsersDeleteService,
    UsersUpdateService,
    PrismaService,
  ],
})
export class UsersModule { }
