import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersCreateService } from '../service/users.create.service';

@Controller('users')
export class UsersCreateController {
    constructor(private readonly usersCreateService: UsersCreateService) { }

    @HttpCode(201)
    @Post('create')
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersCreateService.create(createUserDto);
    }


}
