import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ResourceService } from 'libs/services/resource.service';
import { Model } from 'mongoose';
import { TicketCreateDto } from 'tools/dtos/ticket.dto';
import { TicketModel } from 'tools/models/ticket.model';


@Injectable()
export class TicketService extends ResourceService<TicketModel, TicketCreateDto, TicketCreateDto> {

    constructor(@InjectModel('Ticket') ticketMongo: Model<TicketModel>){
        super(ticketMongo);
    }

}
