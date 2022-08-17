import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ResourceService } from 'libs/services/resource.service';
import { Model } from 'mongoose';
import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
import * as bcrypt from 'bcrypt';
import environment from 'tools/environment/environment';

const saltOrRounds = 10;
const hashText = environment.hashText;

@Injectable()
export class UserService extends ResourceService<UserModel, UserCreateDto, UserUpdateDto> {

    constructor(@InjectModel('User') userMongo: Model<UserModel>) {
        super(userMongo);
    }

    async convertToHash(value: string) {
        let hashPwd;
        await bcrypt.hash(`${value}${hashText}`, saltOrRounds).then((hash) => {
            hashPwd = hash;
        });
        return await hashPwd;
    }

    async compareHash(password, hashedPwd) {
        const match = await bcrypt.compareSync(`${password}${hashText}`, hashedPwd);
        return match;
    }
}
