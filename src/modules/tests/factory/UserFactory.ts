import { SexEnum } from '@prisma/client';

export class UserFactory {
    #randomNumber = String(Math.random().toFixed(4)).replace(".", "");

    createDefaultUser() {
        return {
            name: 'anderson',
            email: `${this.#randomNumber}anderson${this.#randomNumber}@gmail.com`,
            sex: SexEnum['Men'],
            password: '123456789',
            birth_date: '20/20/2000',
        };
    }




    createUserWithWrongSex() {
        return {
            name: 'anderson',
            email: `${this.#randomNumber}anderson${this.#randomNumber}@gmail.com`,
            sex: 'men',
            password: '123456789',
            birth_date: '20/20/2000',
        };
    }

    updateUser(id: number, name: string, email: string, sex: SexEnum, password: string, birth_date: string) {
        return {
            id,
            name,
            email,
            sex,
            password,
            birth_date,
        };
    }

    createUserWithEmptyValues() {
        return {
            name: '',
            email: ``,
            sex: '',
            password: '',
            birth_date: '',
        };
    }
}
