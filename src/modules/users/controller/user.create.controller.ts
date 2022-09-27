import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserCreateService } from '../service/user.create.service';

@Controller('users')
export class UserCreateController {
    constructor(private readonly usersCreateService: UserCreateService) { }

    @HttpCode(201)
    @Post('create')
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersCreateService.create(createUserDto);
    }


}
