import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersCreateService } from '../service/users.create.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersCreateService: UsersCreateService) { }

    @Post('create')
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersCreateService.create(createUserDto);
    }
}
