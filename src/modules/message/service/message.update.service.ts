import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/PrismaService';
import { CreateMessageDto } from '../dto/create-message.dto';
import { UpdateMessageDto } from '../dto/update-message.dto';

@Injectable()
export class MessageUpdateService {
    constructor(private prisma: PrismaService) { }

    async update(id: number, update: UpdateMessageDto) {



    }

}
