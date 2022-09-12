/* eslint-disable prettier/prettier */
import { IsEmail, IsEnum, IsNotEmpty, MinLength, IsDate, ValidatePromise, Min, } from 'class-validator';
import { SexEnum } from 'src/utils/utils.enum';

export class CreateMessageDto {
    id: number;

    @MinLength(1, { message: 'Mensagem não pode esta vazia', })
    message: string;

    @Min(0, { message: 'id do usuário não pode estar vazio' })
    userId: number;

    created_at?: Date;
    updated_at?: Date;
}

