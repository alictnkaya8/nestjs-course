import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TicketTypeDto } from 'tools/dtos/ticket-type.dto';
import { TicketTypeModel } from 'tools/models/ticket-type.model';
import { TicketTypeService } from './ticket-type.service';

@Controller('ticket')
export class TicketTypeController {
    constructor(private ticketTypeService: TicketTypeService){ }

    @Post()
    async createTicketType(@Body() body: TicketTypeDto) : Promise<TicketTypeModel>{
        return await this.ticketTypeService.create(body);
    }

    @Get()
    async getAllTicketTypes(): Promise<TicketTypeModel[]>{
        return await this.ticketTypeService.findAll();
    }

    @Get(':id')
    async getTicketTypeById(@Param() params): Promise<TicketTypeModel>{
        return await this.ticketTypeService.findOne(params.id);
    }

    @Put(':id')
    async updateTicketType(@Param('id') id: string, @Body() ticketTypeDto: TicketTypeDto) : Promise<TicketTypeModel>{
        return await this.ticketTypeService.update(id, ticketTypeDto);
    }

    @Delete(':id')
    async removeTicketType(@Param('id') id: string) : Promise<TicketTypeModel>{
        return await this.ticketTypeService.delete(id);
    }
}
