import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/PrismaService';
import { UpdateMessageDto } from '../dto/update-message.dto';

@Injectable()
export class MessageUpdateService {
    constructor(private prisma: PrismaService) { }

    async update(id: number, update: UpdateMessageDto) {

        await this.prisma.user.findFirstOrThrow({ where: { id } }).catch(_ => {
            throw new HttpException('id não encontrando ' + id, HttpStatus.BAD_REQUEST);
        });


        const data = {
            ...update,
            updated_at: new Date()
        }

        return await this.prisma.message.update({ where: { id }, data }).catch((err) => {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        });

    }

}
