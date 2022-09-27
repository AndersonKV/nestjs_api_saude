import request = require('supertest');
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../../../app.module';
import { UserDeleteService } from '../../../users/service/user.delete.service';
import { PrismaService } from '../../../../database/PrismaService';
import { UserFactory } from '../../factory/UserFactory';
import { UsersModule } from '../../../users/users.module'



describe('[e2e] - UserCreateController', () => {
  let app: INestApplication;
  let httpServer: any;
  let userDeleteService: UserDeleteService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, UsersModule]

    }).compile();

    app = moduleRef.createNestApplication();

    userDeleteService = new UserDeleteService(new PrismaService());

    await app.init();

    httpServer = app.getHttpServer();

  });

  afterAll(async () => {
    await userDeleteService.destroyer();
    await app.close();
  })

  it('should create user', async () => {

    const data = new UserFactory().createDefaultUser();

    const response = await request(httpServer).post('/users/create').send(data);

    expect(response.statusCode).toEqual(201);
  });

  it('should fail in create user with other sex genre', async () => {

    const data = new UserFactory().createUserWithWrongSex();

    const response = await request(httpServer).post('/users/create').send(data);

    expect(response.statusCode).toEqual(400);
  });

  it('should create user with empty values', async () => {

    const data = new UserFactory().createUserWithEmptyValues();


    const response = await request(httpServer).post('/users/create').send(data);

    expect(response.statusCode).toEqual(400);
  });

  it('should fail in create user with email existent', async () => {

    const data = new UserFactory().createDefaultUser();

    await request(httpServer).post('/users/create').send(data);
    const response = await request(httpServer).post('/users/create').send(data);

    expect(response.statusCode).toEqual(400);
  });

});