import {
    Controller,
    Get,
    Param,
    HttpCode,
    Put,
    Body,
} from '@nestjs/common';
import { UpdateMessageDto } from '../dto/update-message.dto';
import { MessageUpdateService } from '../service/message.update.service';

@Controller('message')
export class MessageUpdateController {
    constructor(private readonly messageUpdateService: MessageUpdateService) { }

    @HttpCode(202)
    @Put('update/:id')
    update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessageDto) {
        return this.messageUpdateService.update(+id, updateMessageDto);
    }


}
