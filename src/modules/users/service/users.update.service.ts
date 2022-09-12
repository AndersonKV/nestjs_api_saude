import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersUpdateService {
  constructor(private prisma: PrismaService) {}

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }
}
