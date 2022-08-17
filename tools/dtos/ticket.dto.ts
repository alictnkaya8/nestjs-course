import { IsNotEmpty, Length } from "class-validator";
import { ActivityModel } from "tools/models/activity.model";
import { AuditModel } from "tools/models/audit.model";
import { InventoryModel } from "tools/models/inventory.model";
import { TicketTypeModel } from "tools/models/ticket-type.model";
import { UserModel } from "tools/models/user.model";

export class TicketCreateDto {
    @IsNotEmpty()
    @Length(2, 50)
    name: string;
    @Length(0, 200)
    description: string;
    type: TicketTypeModel;
    responsible: UserModel;
    audit: AuditModel;
    activities: Array<ActivityModel>;
    inventories: Array<InventoryModel>;
}