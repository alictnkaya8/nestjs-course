import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InventoryTypeDto } from 'tools/dtos/inventory-type.dto';
import { InventoryTypeModel } from 'tools/models/inventory-type.model';
import { InventoryTypeService } from './inventory-type.service';

@Controller('inventory')
export class InventoryTypeController {
    constructor(private inventoryTypeService: InventoryTypeService){ }

    @Post()
    async createInventoryType(@Body() body: InventoryTypeDto) : Promise<InventoryTypeModel>{
        return await this.inventoryTypeService.create(body);
    }

    @Get()
    async getAllInventoryTypes(): Promise<InventoryTypeModel[]>{
        return await this.inventoryTypeService.findAll();
    }

    @Get(':id')
    async getInventoryTypeById(@Param() params): Promise<InventoryTypeModel>{
        return await this.inventoryTypeService.findOne(params.id);
    }

    @Put(':id')
    async updateInventoryType(@Param('id') id: string, @Body() inventoryTypeDto: InventoryTypeDto) : Promise<InventoryTypeModel>{
        return await this.inventoryTypeService.update(id, inventoryTypeDto);
    }

    @Delete(':id')
    async removeInventoryType(@Param('id') id: string) : Promise<InventoryTypeModel>{
        return await this.inventoryTypeService.delete(id);
    }
}
