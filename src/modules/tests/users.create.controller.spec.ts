import request = require('supertest');
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../app.module';



describe('[e2e] - UserCreateController', () => {
  let app: INestApplication;
  let httpServer: any;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();



    app = moduleRef.createNestApplication();

    await app.init();

    httpServer = app.getHttpServer();

  });

  it('should create user', async () => {

    const data = {
      name: 'anderson',
      email: 'anderson@gmail.com',
      password: '123456789',
      sex: 'Men',
      birth_date: '26/09/2022'
    }

    const response = await request(httpServer).post('/users/create').send(data);

    expect(response.statusCode).toEqual(201);
  });

});