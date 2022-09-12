import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class UsersDeleteService {
  constructor(private prisma: PrismaService) {}

  deleteById(id: number) {
    return `This action removes a #${id} user`;
  }
}
