import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { error } from 'console';
import { PrismaService } from 'src/database/PrismaService';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async create({
    birthDate,
    date,
    email,
    id,
    name,
    sex,
    updateDate,
  }: CreateUserDto) {
    try {
      return await this.prisma.user.create({
        data: {
          birthDate,
          email,
          name,
          sex,
          date: new Date(),
          updateDate: new Date(),
        },
      });
    } catch (err) {
      throw new HttpException(err, HttpStatus.FORBIDDEN);
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
