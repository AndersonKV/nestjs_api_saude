import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/database/PrismaService';
import { UsersCreateService } from '../service/users.create.service';
import { UsersDeleteService } from '../service/users.delete.service';
import { UsersFindService } from '../service/users.find.service';
import { UsersUpdateService } from '../service/users.update.service';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersCreateService,
        UsersFindService,
        UsersDeleteService,
        UsersUpdateService,
        PrismaService,
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
