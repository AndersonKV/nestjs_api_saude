/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { MessageDeleteService } from '../service/message.delete.service';
import { MessageFindService } from '../service/message.find.service';

@Controller('message')
export class MessageDeleteontroller {
    constructor(private readonly messageDeleteService: MessageDeleteService) { }

    @HttpCode(202)
    @Delete('delete_by_id/:id')
    deleteById(@Param('id') id: string) {
        return this.messageDeleteService.deleteById(+id);
    }
}
