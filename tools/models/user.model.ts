import { AuditModel } from "./audit.model";
import { GroupModel } from "./group.model";
import { RoleModel } from "./role.model";
import * as mongoose from 'mongoose';

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

export const UserSchema = new mongoose.Schema({
    name: String,
    surname: String,
    image: String,
    email: String,
    password: String,
    passwordHash: String,
    dateOfBirth: Date,
    audit: Object,
    roles: Array,
    groups: Array
});