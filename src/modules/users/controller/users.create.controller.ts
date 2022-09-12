import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseFilters,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UsersCreateService } from '../service/users.create.service';
import { UsersDeleteService } from '../service/users.delete.service';
import { UsersFindService } from '../service/users.find.service';
import { UsersUpdateService } from '../service/users.update.service';
import { HttpExceptionFilter } from '../../../config/exception/HttpExceptionFilter';

@Controller('users')
export class UsersController {
    constructor(private readonly usersCreateService: UsersCreateService) { }

    @Post('create')
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersCreateService.create(createUserDto);
    }
}
