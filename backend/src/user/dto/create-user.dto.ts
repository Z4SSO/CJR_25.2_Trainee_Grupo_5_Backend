import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto  {

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'A senha deve conter ao menos uma letra maiúscula, uma letra minúscula e um número ou caractere especial.',
    })
    password_hash: string;

    @IsString()
    username: string;

    @IsString()
    name: string;

}

