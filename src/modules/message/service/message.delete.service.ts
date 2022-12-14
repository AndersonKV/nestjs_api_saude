import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/PrismaService';

@Injectable()
export class MessageDeleteService {
    constructor(private prisma: PrismaService) { }

    async deleteById(id: number) {
        const find = await this.prisma.message.deleteMany({ where: { id } })

        if (!find.count) {
            throw new HttpException(`${id} não encontrado`, HttpStatus.BAD_REQUEST);
        }
    }

    async destroyer() {
        await this.prisma.message.deleteMany({})
    }
}
