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
export class UsersFindController {
    constructor(private readonly usersFindService: UsersFindService) { }

    @Get('find_all')
    findAll() {
        return this.usersFindService.findAll();
    }

    @Get('find_by_id/:id')
    findById(@Param('id') id: number) {
        return this.usersFindService.findById(+id);
    }
}
