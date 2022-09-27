import { Controller, Body, Put, Param, HttpCode } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserUpdateService } from '../service/user.update.service';

@Controller('users')
export class UserUpdateController {
    constructor(private readonly usersUpdateService: UserUpdateService) { }

    @HttpCode(202)
    @Put('update/:id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersUpdateService.update(+id, updateUserDto);
    }



}
