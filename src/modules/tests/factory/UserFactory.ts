import { SexEnum } from "@prisma/client";

export class UserFactory {
    #randomNumber = Math.floor(Math.random() * 100) + 1;


    createDefaultUser() {
        return {
            name: 'anderson',
            email: `${this.#randomNumber}anderson${this.#randomNumber}@gmail.com`,
            sex: SexEnum['Men'],
            password: '123456789',
            birth_date: '20/20/2000'
        }
    }

    createUserWithWrongSex() {
        return {
            name: 'anderson',
            email: `${this.#randomNumber}anderson${this.#randomNumber}@gmail.com`,
            sex: 'men',
            password: '123456789',
            birth_date: '20/20/2000'
        }
    }


    createUserWithEmptyValues() {
        return {
            name: '',
            email: ``,
            sex: '',
            password: '',
            birth_date: ''
        }
    }
}