import { IsNotEmpty, Length } from "class-validator";

export class ActivityDto {
    @IsNotEmpty()
    @Length(2, 50)
    name: string;
}