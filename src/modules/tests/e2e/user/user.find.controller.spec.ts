import request = require('supertest');
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../../../app.module';
import { UserDeleteService } from '../../../users/service/user.delete.service';
import { PrismaService } from '../../../../database/PrismaService';
import { UserFactory } from '../../factory/UserFactory';
import { UserFindService } from 'src/modules/users/service/user.find.service';
import { UsersModule } from '../../../users/users.module'



describe('[e2e] - UserFindController', () => {
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

    it('should find users', async () => {

        const data = new UserFactory().createDefaultUser();

        await request(httpServer).post('/users/create').send(data);

        const response = await request(httpServer).get('/users/find_all');

        expect(response.statusCode).toEqual(202);
        expect(response.body.length).toBeGreaterThanOrEqual(1);
    });

    it('should find by id', async () => {

        const data = new UserFactory().createDefaultUser();

        const createUser = await request(httpServer).post('/users/create').send(data);
        const { id } = createUser.body

        const response = await request(httpServer).get('/users/find_by_id/' + id)

        expect(response.statusCode).toEqual(202);
    });

    it('should fail in find by id', async () => {

        const response = await request(httpServer).get('/users/find_by_id/' + 500)

        expect(response.statusCode).toEqual(400);
    });


});