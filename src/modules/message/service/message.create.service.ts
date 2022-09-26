import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/PrismaService';
import { CreateMessageDto } from '../dto/create-message.dto';

@Injectable()
export class MessageCreateService {
    constructor(private prisma: PrismaService) { }

    async create({ message, userId }: CreateMessageDto) {

        const find = await this.prisma.user.findUnique({ where: { id: userId } })

        if (!find) {
            throw new HttpException(`id ${userId} não encontrado`, HttpStatus.BAD_REQUEST);
        }

        const data = new CreateMessageDto(userId, message);

        return await this.prisma.message.create({ data }).catch((err) => {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        });

    }
}
