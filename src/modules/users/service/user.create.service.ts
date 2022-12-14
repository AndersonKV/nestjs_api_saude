import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/PrismaService';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UserCreateService {
    constructor(private prisma: PrismaService) { }

    async create({ birth_date, email, name, password, sex }: CreateUserDto) {

        const findByEmail = await this.prisma.user.findUnique({
            where: {
                email
            }
        })

        if (findByEmail) {
            throw new HttpException('email já registrado', HttpStatus.BAD_REQUEST);
        }

        const data = {
            birth_date, email, name, password, sex,
            ...new CreateUserDto()
        };

        return await this.prisma.user.create({ data }).catch((err) => {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        });
    }
}
