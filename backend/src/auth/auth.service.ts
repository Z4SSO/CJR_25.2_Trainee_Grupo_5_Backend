import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    async validateUser(email: string, password: string) {
        const user = await this.userService.findbyEmail(email);

        if (user) {
            const senhaValida = await bcrypt.compare(password, user.password_hash);
            if (senhaValida) {  
                return {
                    ...user,
                    password_hash: undefined,
                };
            }
        }

        throw new Error('Credenciais inválidas');

    }

}
