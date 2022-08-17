import { IsDateString, IsEmail, IsNotEmpty, Length } from "class-validator";
import { GroupModel } from "tools/models/group.model";
import { RoleModel } from "tools/models/role.model";

export class UserCreateDto {
    @IsNotEmpty()
    @Length(2, 20)
    name: string;
    @IsNotEmpty()
    @Length(2, 20)
    surname: string;
    image: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    password: string;
    @IsDateString()
    dateOfBirth: Date;
}

export class UserUpdateDto{
    name: string;
    surname: string;
    image: string;
    email: string;
    password: string;
    dateOfBirth: Date;
    roles: Array<RoleModel>;
    groups: Array<GroupModel>;
}

export class UserLoginDto {
    email: string;
    password: string;
}