import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";
import { ActivityModel } from "tools/models/activity.model";
import { AuditModel } from "tools/models/audit.model";
import { InventoryModel } from "tools/models/inventory.model";
import { TicketTypeModel } from "tools/models/ticket-type.model";
import { UserModel } from "tools/models/user.model";

export class TicketCreateDto {
    @IsNotEmpty()
    @Length(2, 50)
    @ApiProperty()
    name: string;
    @Length(0, 200)
    @ApiProperty()
    description: string;
    @ApiProperty()
    type: TicketTypeModel;
    @ApiProperty()
    responsible: UserModel;
    @ApiProperty()
    audit: AuditModel;
    @ApiProperty()
    activities: Array<ActivityModel>;
    @ApiProperty()
    inventories: Array<InventoryModel>;
}