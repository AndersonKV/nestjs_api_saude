/* eslint-disable prettier/prettier */
import { SexEnum } from '@prisma/client';
import { IsEmail, IsEnum, IsNotEmpty, MinLength, IsDate } from 'class-validator';

export class CreateUserDto {

    @MinLength(1, { message: 'Nome não pode estar vazio', })
    name: string;

    @MinLength(8, { message: 'Senha deve ter no minimo 8 digitos', })
    password: string;

    @IsEmail({}, { message: 'Email invalido' })
    email: string;

    @IsEnum(SexEnum, { message: "Error ao escolher genero" })
    sex: SexEnum;

    @IsNotEmpty()
    birth_date: string;

    created_at?: Date;
    updated_at?: Date;
}

