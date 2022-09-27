import request = require('supertest');
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../../../app.module';
import { UserDeleteService } from '../../../users/service/user.delete.service';
import { PrismaService } from '../../../../database/PrismaService';
import { UserFactory } from '../../factory/UserFactory';
import { UsersModule } from '../../../users/users.module'



describe('[e2e] - UserDeleteController', () => {
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

    it('should delete user by id', async () => {

        const data = new UserFactory().createDefaultUser();

        const createdUser = await request(httpServer).post('/users/create').send(data);

        const response = await request(httpServer).delete('/users/delete_by_id/' + createdUser.body.id);

        expect(response.statusCode).toEqual(202);
    });

    it('should fail in delete by id', async () => {

        const response = await request(httpServer).delete('/users/delete_by_id/' + 8000);

        expect(response.statusCode).toEqual(400);
    });




});