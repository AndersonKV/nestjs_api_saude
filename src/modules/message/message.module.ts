import { Module } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { MessageCreateController } from './controller/message.create.controller';
import { MessageDeleteController } from './controller/message.delete.controller';
import { MessageFindController } from './controller/message.find.controller';
import { MessageCreateService } from './service/message.create.service';
import { MessageDeleteService } from './service/message.delete.service';
import { MessageFindService } from './service/message.find.service';
import { MessageUpdateService } from './service/message.update.service';

@Module({
    controllers: [MessageCreateController,
        MessageFindController,
        MessageDeleteController],
    providers: [MessageCreateService,
        MessageFindService,
        MessageDeleteService,
        MessageUpdateService,
        PrismaService],
})
export class MessageModule { }
