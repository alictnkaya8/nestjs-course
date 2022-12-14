import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { query } from 'express';
import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';
import { FilterModel } from 'tools/models/filter.model';
import { UserModel } from 'tools/models/user.model';
import { UserService } from './user.service';
import { Roles } from 'libs/decorators/role.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    @Roles('Admin')
    async createUser(@Body() body: UserCreateDto): Promise<UserModel> {
        body.password = await this.userService.convertToHash(body.password);
        return await this.userService.create(body);
    }

    @Get()
    async getAllUsers(@Query() query: FilterModel): Promise<UserModel[]> {
        return await this.userService.findAll(query);
    }

    @Get(':id')
    @Roles('Developer')
    async getUserById(@Param() params): Promise<UserModel> {
        return await this.userService.findOne(params.id);
    }

    @Put(':id')
    @Roles('Operator')
    async updateUser(@Param('id') id: string, @Body() userUpdateDto: UserUpdateDto): Promise<UserModel> {
        return await this.userService.update(id, userUpdateDto);
    }

    @Delete(':id')
    async removeUser(@Param('id') id: string): Promise<UserModel> {
        return await this.userService.delete(id);
    }
}
