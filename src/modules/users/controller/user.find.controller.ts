import { Controller, Get, Param, HttpCode } from '@nestjs/common';

import { UserFindService } from '../service/user.find.service';

@Controller('users')
export class UserFindController {
    constructor(private readonly usersFindService: UserFindService) { }

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
