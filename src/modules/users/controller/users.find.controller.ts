import { Controller, Get, Param, HttpCode } from '@nestjs/common';

import { UsersFindService } from '../service/users.find.service';

@Controller('users')
export class UsersFindController {
    constructor(private readonly usersFindService: UsersFindService) { }

    @HttpCode(202)
    @Get('find_all')
    findAll() {
        return this.usersFindService.findAll();
    }

    @HttpCode(202)
    @Get('find_by_id/:id')
    findById(@Param('id') id: number) {
        return this.usersFindService.findById(+id);
    }
}
