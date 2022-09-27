import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/PrismaService';

@Injectable()
export class UserDeleteService {
  constructor(private prisma: PrismaService) { }

  async deleteById(id: number) {
    await this.prisma.user.delete({
      where: { id },
    }).catch(_ => {
      throw new HttpException("id não encontrado", HttpStatus.BAD_REQUEST);
    });
  }

  async destroyer() {
    await this.prisma.user.deleteMany({});
  }
}
