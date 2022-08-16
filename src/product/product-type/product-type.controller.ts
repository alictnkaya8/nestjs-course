import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductTypeDto } from 'tools/dtos/product-type.dto';
import { ProductTypeModel } from 'tools/models/product-type.model';
import { ProductTypeService } from './product-type.service';

@Controller('product')
export class ProductTypeController {
    constructor(private productTypeService: ProductTypeService){ }

    @Post()
    async createProductType(@Body() body: ProductTypeDto) : Promise<ProductTypeModel>{
        return await this.productTypeService.create(body);
    }

    @Get()
    async getAllProductTypes(): Promise<ProductTypeModel[]>{
        return await this.productTypeService.findAll();
    }

    @Get(':id')
    async getProductTypeById(@Param() params): Promise<ProductTypeModel>{
        return await this.productTypeService.findOne(params.id);
    }

    @Put(':id')
    async updateProductType(@Param('id') id: string, @Body() productTypeDto: ProductTypeDto) : Promise<ProductTypeModel>{
        return await this.productTypeService.update(id, productTypeDto);
    }

    @Delete(':id')
    async removeProductType(@Param('id') id: string) : Promise<ProductTypeModel>{
        return await this.productTypeService.delete(id);
    }
}
