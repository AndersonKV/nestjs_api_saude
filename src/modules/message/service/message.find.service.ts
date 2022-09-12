/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateMessageDto } from '../dto/create-message.dto';

@Injectable()
export class MessageFindService {
    constructor(private prisma: PrismaService) { }

    async findById(id: number) {

        const find = await this.prisma.message.findUnique({ where: { id } })

        if (!find) {
            throw new HttpException(`id ${id} não encontrado`, HttpStatus.BAD_REQUEST);
        }

        return find;
    }

    async findLastMessages() {

        const find = await this.prisma.message.findMany({
            orderBy: {
                created_at: "desc"
            },
        })

        return find;
    }
}
