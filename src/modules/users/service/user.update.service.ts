import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/PrismaService';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserUpdateService {
  constructor(private prisma: PrismaService) { }

  async update(id: number, update: UpdateUserDto) {

    const userExist = await this.prisma.user.findFirstOrThrow({ where: { id } }).catch(_ => {
      throw new HttpException('id não encontrando ' + id, HttpStatus.BAD_REQUEST);
    });


    if (update.email && userExist.email !== update.email) {
      const emailExist = await this.prisma.user.findMany({
        where: { email: update.email },
      })

      if (emailExist.length) {
        throw new HttpException('email já existe', HttpStatus.BAD_REQUEST);
      }
    }

    const data = {
      ...update,
      updated_at: new Date()
    }

    return await this.prisma.user.update({ where: { id }, data }).catch((err) => {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    });
  }
}
