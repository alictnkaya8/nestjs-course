import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserService } from "src/user/user.service";
import { UserLoginDto } from "tools/dtos/user.dto";
import { UserModel } from "tools/models/user.model";
import * as jwt from 'jsonwebtoken';
import environment from "tools/environment/environment";

@Injectable()
export class LoginService {

    constructor(@InjectModel('User') private readonly userMongo: Model<UserModel>, private userService: UserService) { }

    async loginUser(user: UserLoginDto): Promise<any> {
        try {
            const userExists = await this.userMongo.findOne({
                email: user.email
            }).exec();

            if (userExists) {
                let checkPwd;
                await this.userService.compareHash(user.password, userExists.password).then((res) => {
                    if (res) {
                        checkPwd = true;
                    } else {
                        checkPwd = false;
                    }
                });
                if (checkPwd) {
                    const authJwt = jwt.sign({user: userExists}, environment.jwtSecret);
                    return await { success: true, token: authJwt };
                } else {
                    return await { success: false, res: 'User password is incorrect!' };
                }
            } else {
                return await { success: false, res: 'User does not exist!' };
            }
        } catch (ex) {
            return await { success: false, res: 'Something went wrong!', exception: ex };
        }
    }
}
