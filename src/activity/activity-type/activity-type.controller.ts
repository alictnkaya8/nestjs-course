import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ActivityTypeDto } from 'tools/dtos/activity-type.dto';
import { ActivityTypeModel } from 'tools/models/activity-type.model';
import { ActivityTypeService } from './activity-type.service';

@Controller('activity-type')
export class ActivityTypeController {
    constructor(private activityTypeService: ActivityTypeService){ }

    @Post()
    async createActivityType(@Body() body: ActivityTypeDto) : Promise<ActivityTypeModel>{
        return await this.activityTypeService.create(body);
    }

    @Get()
    async getAllActivityTypes(): Promise<ActivityTypeModel[]>{
        return await this.activityTypeService.findAll();
    }

    @Get(':id')
    async getActivityTypeById(@Param() params): Promise<ActivityTypeModel>{
        return await this.activityTypeService.findOne(params.id);
    }

    @Put(':id')
    async updateActivityType(@Param('id') id: string, @Body() activityTypeDto: ActivityTypeDto) : Promise<ActivityTypeModel>{
        return await this.activityTypeService.update(id, activityTypeDto);
    }

    @Delete(':id')
    async removeActivityType(@Param('id') id: string) : Promise<ActivityTypeModel>{
        return await this.activityTypeService.delete(id);
    }
}
