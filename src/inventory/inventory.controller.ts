import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InventoryDto } from 'tools/dtos/inventory.dto';
import { InventoryModel } from 'tools/models/inventory.model';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
    constructor(private inventoryService: InventoryService){ }

    @Post()
    async createInventory(@Body() body: InventoryDto) : Promise<InventoryModel>{
        return await this.inventoryService.create(body);
    }

    @Get()
    async getAllInventories(): Promise<InventoryModel[]>{
        return await this.inventoryService.findAll();
    }

    @Get(':id')
    async getInventoryById(@Param() params): Promise<InventoryModel>{
        return await this.inventoryService.findOne(params.id);
    }

    @Put(':id')
    async updateInventory(@Param('id') id: string, @Body() inventoryDto: InventoryDto) : Promise<InventoryModel>{
        return await this.inventoryService.update(id, inventoryDto);
    }

    @Delete(':id')
    async removeInventory(@Param('id') id: string) : Promise<InventoryModel>{
        return await this.inventoryService.delete(id);
    }
}
