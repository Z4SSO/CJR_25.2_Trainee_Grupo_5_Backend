import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { UserPayload } from './models/UserPayload';
import { User } from 'src/user/entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService,
                private readonly jwtService: JwtService,
    ) {}

    login(user: User):UserToken {
        const payload: UserPayload = {
            sub: user.id,
            email: user.email,
            username: user.username,
            name: user.name,
        };

        const jwttoken = this.jwtService.sign(payload);

        return {
            token: jwttoken
        };
    }

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
