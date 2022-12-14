import { Body, Controller, Post } from '@nestjs/common';
import { UserLoginDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(private loginService: LoginService){ }

    @Post()
    async login(@Body() body: UserLoginDto) : Promise<UserModel>{
        return await this.loginService.loginUser(body);
    }
}
