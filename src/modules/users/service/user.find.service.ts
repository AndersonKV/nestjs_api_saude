import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/PrismaService';

@Injectable()
export class UserFindService {
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
    }
}
