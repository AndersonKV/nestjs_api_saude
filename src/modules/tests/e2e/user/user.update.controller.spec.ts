import request = require('supertest');
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../../../app.module';
import { UserDeleteService } from '../../../users/service/user.delete.service';
import { PrismaService } from '../../../../database/PrismaService';
import { UserFactory } from '../../factory/UserFactory';
import { UsersModule } from '../../../users/users.module';
import { SexEnum } from '@prisma/client';

describe('[e2e] - UserUpdateController', () => {
    let app: INestApplication;
    let httpServer: any;
    let userDeleteService: UserDeleteService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [AppModule, UsersModule],
        }).compile();

        app = moduleRef.createNestApplication();

        userDeleteService = new UserDeleteService(new PrismaService());

        await app.init();

        httpServer = app.getHttpServer();
    });

    afterAll(async () => {
        await userDeleteService.destroyer();
        await app.close();
    });

    it('should update user', async () => {
        const data = new UserFactory().createDefaultUser();

        const createdUser = await request(httpServer)
            .post('/users/create')
            .send(data);

        const { id, name, sex, password, birth_date } = createdUser.body;

        const update = new UserFactory().updateUser(
            id,
            name,
            'qq@gmail.com',
            SexEnum['Woman'],
            password,
            birth_date,
        );


        const updateUser = await request(httpServer)
            .put('/users/update/' + update.id)
            .send(update);

        expect(updateUser.statusCode).toEqual(202);
        expect(updateUser.body.email).toEqual(update.email);
        expect(updateUser.body.sex).toEqual(update.sex);
    });

    it('should fail in update wrong values', async () => {

        const data = new UserFactory().createDefaultUser();

        const createdUser = await request(httpServer)
            .post('/users/create')
            .send(data);

        const { id, name, sex, password, birth_date } = createdUser.body;

        const createUserWithWrongSex = new UserFactory().createUserWithWrongSex();

        const dateUpdate = { ...createUserWithWrongSex, id }


        const updateUser = await request(httpServer)
            .put('/users/update/' + id)
            .send(dateUpdate);

        expect(updateUser.statusCode).toEqual(400);
    });

    it('should fail in update email existent', async () => {
        const data = new UserFactory().createDefaultUser();
        const data2 = new UserFactory().createDefaultUser();

        await request(httpServer)
            .post('/users/create')
            .send(data);

        const createdUser = await request(httpServer)
            .post('/users/create')
            .send(data2);

        const { id, name, sex, password, birth_date } = createdUser.body;

        const update = new UserFactory().updateUser(
            id,
            name,
            data.email,
            sex,
            password,
            birth_date,
        );

        const updateUser = await request(httpServer)
            .put('/users/update/' + update.id)
            .send(data);

        expect(updateUser.statusCode).toEqual(400);
    });


});
