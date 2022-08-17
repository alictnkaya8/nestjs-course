import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GroupService } from 'src/group/group.service';
import { GroupModel } from 'tools/models/group.model';
import { RoleModel } from 'tools/models/role.model';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private reflector: Reflector,
        @Inject('GroupService') private readonly groupService: GroupService) { }

    canActivate(context: ExecutionContext): boolean {
        const allowedRoles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!allowedRoles) return true;
        const request = context.switchToHttp().getRequest();
        const user = request.user.user;
        const allowed = this.isAllowed(allowedRoles, user.roles, user.groups);

        if (!allowed) throw new HttpException('Forbidden Method!', HttpStatus.FORBIDDEN);

        return true;
    }

    async isAllowed(allowedRoles, userRoles: RoleModel[], userGroups: GroupModel[]) {
        const allUserRoles = [];
        userRoles.map(data => {
            allUserRoles.push(data.name);
        });
        await Promise.all (
            userGroups.map(async data => {
                const groupRoles = await this.groupService.findOne(data._id);
                groupRoles[0].roles.map(res => {
                    allUserRoles.push(res['name']);
                })
            })
        );
        const hasRole = allUserRoles.some(role => allowedRoles.includes(role));
        return hasRole;
    }
}