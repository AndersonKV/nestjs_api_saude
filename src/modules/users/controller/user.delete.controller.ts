import { Controller, Param, Delete, HttpCode } from '@nestjs/common';

import { UserDeleteService } from '../service/user.delete.service';

@Controller('users')
export class UserDeleteController {
    constructor(private readonly usersDeleteService: UserDeleteService) { }

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
