import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TicketCreateDto } from 'tools/dtos/ticket.dto';
import { TicketModel } from 'tools/models/ticket.model';
import { TicketService } from './ticket.service';

@Controller('ticket')
export class TicketController {
    constructor(private ticketService: TicketService){ }

    @Post()
    async createTicket(@Body() body: TicketCreateDto) : Promise<TicketModel>{
        return await this.ticketService.create(body);
    }

    @Get()
    async getAllTickets(): Promise<TicketModel[]>{
        return await this.ticketService.findAll();
    }

    @Get(':id')
    async getTicketById(@Param() params): Promise<TicketModel>{
        return await this.ticketService.findOne(params.id);
    }

    @Put(':id')
    async updateTicket(@Param('id') id: string, @Body() ticketDto: TicketCreateDto) : Promise<TicketModel>{
        return await this.ticketService.update(id, ticketDto);
    }

    @Delete(':id')
    async removeTicket(@Param('id') id: string) : Promise<TicketModel>{
        return await this.ticketService.delete(id);
    }
}
