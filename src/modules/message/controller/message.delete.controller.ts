import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { MessageDeleteService } from '../service/message.delete.service';

@Controller('message')
export class MessageDeleteController {
    constructor(private readonly messageDeleteService: MessageDeleteService) { }

    @HttpCode(202)
    @Delete('delete_by_id/:id')
    deleteById(@Param('id') id: string) {
        return this.messageDeleteService.deleteById(+id);
    }


    @HttpCode(202)
    @Delete('destroyer')
    destroyer() {
        return this.messageDeleteService.destroyer();
    }
}
