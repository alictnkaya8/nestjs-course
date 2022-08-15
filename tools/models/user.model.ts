import { AuditModel } from "./audit.model";
import { GroupModel } from "./group.model";
import { RoleModel } from "./role.model";

export class UserModel {
    id: string;
    name: string;
    surname: string;
    image: string;
    email: string;
    password: string;
    passwordHash: string;
    dateOfBirth: Date;
    audit: AuditModel;
    roles: Array<RoleModel>;
    groups: Array<GroupModel>;
}