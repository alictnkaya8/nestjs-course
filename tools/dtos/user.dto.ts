import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEmail, IsNotEmpty, Length } from "class-validator";
import { GroupModel } from "tools/models/group.model";
import { RoleModel } from "tools/models/role.model";

export class UserCreateDto {
    @IsNotEmpty()
    @Length(2, 20)
    @ApiProperty()
    name: string;
    @IsNotEmpty()
    @Length(2, 20)
    @ApiProperty()
    surname: string;
    @ApiProperty()
    image: string;
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
    @IsDateString()
    @ApiProperty()
    dateOfBirth: Date;
}

export class UserUpdateDto{
    @ApiProperty()
    name: string;
    @ApiProperty()
    surname: string;
    @ApiProperty()
    image: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    dateOfBirth: Date;
    @ApiProperty()
    roles: Array<RoleModel>;
    @ApiProperty()
    groups: Array<GroupModel>;
}

export class UserLoginDto {
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
}