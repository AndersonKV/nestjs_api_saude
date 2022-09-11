import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersCreateService {
    constructor(private prisma: PrismaService) { }

    async create({ birthDate, email, name, sex }: CreateUserDto) {
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
}
