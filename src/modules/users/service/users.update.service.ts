/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersUpdateService {
  constructor(private prisma: PrismaService) { }

  async update(id: number, data: UpdateUserDto) {
    try {
      const userExist = await this.prisma.user.findUnique({ where: { id } });

      if (!userExist) {
        throw new HttpException('id não encontrando ' + id, HttpStatus.BAD_REQUEST);
      }


      if (data.email) {
        const find = await this.prisma.user.findMany({
          where: { email: data.email },
        })

        if (find)
          throw new HttpException('email já existe', HttpStatus.BAD_REQUEST);

      }

      return await this.prisma.user.update({ where: { id }, data });
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }
}
