/* eslint-disable prettier/prettier */
import { Controller, Body, Put, Param, HttpCode } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UsersUpdateService } from '../service/users.update.service';

@Controller('users')
export class UsersUpdateController {
    constructor(private readonly usersUpdateService: UsersUpdateService) { }

    @HttpCode(202)
    @Put('update/:id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersUpdateService.update(+id, updateUserDto);
    }
}
