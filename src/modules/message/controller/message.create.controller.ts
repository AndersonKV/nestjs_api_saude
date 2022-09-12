import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseFilters,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { CreateMessageDto } from '../dto/create-message.dto';
import { MessageCreateService } from '../service/message.create.service';

@Controller('message')
export class MessageCreateController {
    constructor(private readonly messageCreateService: MessageCreateService) { }

    @Post('create')
    create(@Body() createMessageDto: CreateMessageDto) {
        return this.messageCreateService.create(createMessageDto);
    }
}
