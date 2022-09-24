import { SexEnum } from '@prisma/client';
import { IsEmail, IsEnum, IsNotEmpty, MinLength, } from 'class-validator';
import e from 'express';

interface Props {
    name: string;
    password: string;
    email: string;
    sex: SexEnum;
    birth_date: string;
}

interface ICreateDTO {
    name: string;
    password: string;
    email: string;
    sex: SexEnum;
    created_at: Date;
    updated_at: Date;


}
export class CreateUserDto {
    private props: ICreateDTO;

    @MinLength(1, { message: 'Nome não pode estar vazio', })
    name: string;

    @MinLength(8, { message: 'Senha deve ter no minimo 8 digitos', })
    password: string;

    @IsEmail({}, { message: 'Email invalido' })
    email: string;

    @IsEnum(SexEnum, { message: "Error ao escolher genero" })
    sex: SexEnum;

    @IsNotEmpty({ message: 'data de nascimento não pode estar vazio' })
    birth_date: string;

    readonly created_at = new Date();
    readonly updated_at = new Date();

}

