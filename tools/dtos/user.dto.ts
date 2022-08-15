import { GroupModel } from "tools/models/group.model";
import { RoleModel } from "tools/models/role.model";

export class UserCreateDto {
    name: string;
    surname: string;
    image: string;
    email: string;
    password: string;
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