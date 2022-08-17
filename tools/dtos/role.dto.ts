import { IsNotEmpty, Length } from "class-validator";

export class RoleDto {
    @IsNotEmpty()
    @Length(2, 20)
    name: string;
}