import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductDto } from 'tools/dtos/product.dto';
import { ProductModel } from 'tools/models/product.model';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){ }

    @Post()
    async createProduct(@Body() body: ProductDto) : Promise<ProductModel>{
        return await this.productService.create(body);
    }

    @Get()
    async getAllProducts(): Promise<ProductModel[]>{
        return await this.productService.findAll();
    }

    @Get(':id')
    async getProductById(@Param() params): Promise<ProductModel>{
        return await this.productService.findOne(params.id);
    }

    @Put(':id')
    async updateProduct(@Param('id') id: string, @Body() productDto: ProductDto) : Promise<ProductModel>{
        return await this.productService.update(id, productDto);
    }

    @Delete(':id')
    async removeProduct(@Param('id') id: string) : Promise<ProductModel>{
        return await this.productService.delete(id);
    }
}
