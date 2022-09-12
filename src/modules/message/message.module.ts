import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { MessageCreateController } from './controller/message.create.controller';
import { MessageCreateService } from './service/message.create.service';

@Module({
    controllers: [MessageCreateController],
    providers: [MessageCreateService, PrismaService],
})
export class MessageModule { }
