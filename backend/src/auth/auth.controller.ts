import { Body, Controller, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import * as AuthRequest from './models/AuthRequest';
import { IsPublic } from './decorators/is-public.decorator';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {} 

    @Post('login')
    @IsPublic()
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    login(@Request() req: AuthRequest.AuthRequest) {
        console.log(req.user);

        return this.authService.login(req.user);
    }

    @Post('forgot')
    async forgotPass(@Body() body: { email: string }) {
        return this.authService.forgotPassword(body.email);
    }

}
