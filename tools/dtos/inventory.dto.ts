import { IsNumber, Length } from "class-validator";

export class InventoryDto {
    @IsNumber()
    barcode: number;
    @Length(0,200)
    description: string;
}