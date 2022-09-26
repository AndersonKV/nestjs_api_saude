import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/PrismaService';

@Injectable()
export class UsersDeleteService {
  constructor(private prisma: PrismaService) { }

  async deleteById(id: number) {
    return await this.prisma.user.deleteMany({ where: { id } });
  }

  async destroyer() {
    await this.prisma.user.deleteMany({});
  }
}
