import { IsNotEmpty, Length } from "class-validator";

export class ProductDto {
    @IsNotEmpty()
    @Length(2, 50)
    name: string;
}