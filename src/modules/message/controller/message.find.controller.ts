import {
    Controller,
    Get,
    Param,
    HttpCode,
} from '@nestjs/common';
import { MessageFindService } from '../service/message.find.service';

@Controller('message')
export class MessageFindController {
    constructor(private readonly messageFindService: MessageFindService) { }

    @HttpCode(202)
    @Get('find_by_id/:id')
    findById(@Param('id') id: number) {
        return this.messageFindService.findById(+id);
    }

    @HttpCode(202)
    @Get('last_messages')
    findLastMessages() {
        return this.messageFindService.findLastMessages();
    }
}
