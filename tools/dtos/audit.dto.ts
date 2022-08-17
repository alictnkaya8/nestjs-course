import { IsBoolean, IsDateString } from "class-validator";

export class AuditDto {
    @IsDateString()
    createDate: Date;
    createdBy: string;
    @IsDateString()
    lastModifiedDate: Date;
    lastModifiedBy: string;
    @IsBoolean()
    active: boolean;
}