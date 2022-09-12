/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SexEnum } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersCreateService {
    constructor(private prisma: PrismaService) { }

    async create({ birth_date, email, name, sex, password }: CreateUserDto) {
        const data = {
            email,
            birth_date,
            name,
            sex: SexEnum[sex],
            password,
            created_at: new Date(),
            updated_at: new Date(),
        };

        return await this.prisma.user.create({ data }).catch((err) => {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        });
    }
}
