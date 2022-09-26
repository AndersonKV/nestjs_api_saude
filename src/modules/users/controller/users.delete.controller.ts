import { Controller, Param, Delete, HttpCode } from '@nestjs/common';

import { UsersDeleteService } from '../service/users.delete.service';

@Controller('users')
export class UsersDeleteController {
    constructor(private readonly usersDeleteService: UsersDeleteService) { }

    @HttpCode(202)
    @Delete('delete_by_id/:id')
    deleteById(@Param('id') id: string) {
        return this.usersDeleteService.deleteById(+id);
    }

    @HttpCode(202)
    @Delete('destroyer')
    destroyer() {
        return this.usersDeleteService.destroyer();
    }
}
