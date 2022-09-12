import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersUpdateService {
  constructor(private prisma: PrismaService) { }

  async update(id: number, data: UpdateUserDto) {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }
}
