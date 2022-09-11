import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UsersCreateService } from '../service/users.create.service';
import { UsersDeleteService } from '../service/users.delete.service';
import { UsersFindService } from '../service/users.find.service';
import { UsersUpdateService } from '../service/users.update.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersCreateService: UsersCreateService,
    private readonly usersFindService: UsersFindService,
    private readonly usersUpdateService: UsersUpdateService,
    private readonly usersDeleteService: UsersDeleteService,
  ) { }

  @Post('/create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersCreateService.create(createUserDto);
  }

  @Get('/find_all')
  findAll() {
    return this.usersFindService.findAll();
  }

  @Get('/find_by_id:')
  findOne(@Param('id') id: string) {
    return this.usersFindService.findOne(+id);
  }

  @Patch('/update_by_id:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersUpdateService.update(+id, updateUserDto);
  }

  @Delete('/delete_by_id:id')
  remove(@Param('id') id: string) {
    return this.usersDeleteService.deleteById(+id);
  }
}
