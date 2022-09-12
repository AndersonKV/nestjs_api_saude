/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class UsersFindService {
    constructor(private prisma: PrismaService) { }

    findAll() {
        return this.prisma.user.findMany({});
    }

    async findById(id: number) {
        const user = await this.prisma.user.findUnique({
            where: {
                id,
            },
        });


        if (!user?.id) {
            throw new HttpException("Usuario não registrado", HttpStatus.BAD_REQUEST);
        }

        return user;

        // return await this.prisma.user
        //     .findFirst({
        //         where: {
        //             id,
        //         },
        //     })
        //     .catch((err) => {
        //         throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        //     });
    }
}
