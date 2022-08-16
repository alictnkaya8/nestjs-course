import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RoleDto } from 'tools/dtos/role.dto';
import { RoleModel } from 'tools/models/role.model';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
    constructor(private roleService: RoleService){ }

    @Post()
    async createRole(@Body() body: RoleDto) : Promise<RoleModel>{
        return await this.roleService.create(body);
    }

    @Get()
    async getAllRoles(): Promise<RoleModel[]>{
        return await this.roleService.findAll();
    }

    @Get(':id')
    async getRoleById(@Param() params): Promise<RoleModel>{
        return await this.roleService.findOne(params.id);
    }

    @Put(':id')
    async updateRole(@Param('id') id: string, @Body() roleDto: RoleDto) : Promise<RoleModel>{
        return await this.roleService.update(id, roleDto);
    }

    @Delete(':id')
    async removeRole(@Param('id') id: string) : Promise<RoleModel>{
        return await this.roleService.delete(id);
    }
}
