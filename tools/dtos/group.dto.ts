import { IsNotEmpty, Length } from "class-validator";
import { RoleDto } from "./role.dto";

export class GroupCreateDto {
    @IsNotEmpty()
    @Length(2, 50)
    name: string;
}

export class GroupRolesDto {
    roles: Array<RoleDto>;
}