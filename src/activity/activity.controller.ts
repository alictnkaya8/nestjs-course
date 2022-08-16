import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ActivityDto } from 'tools/dtos/activity.dto';
import { ActivityModel } from 'tools/models/activity.model';
import { ActivityService } from './activity.service';

@Controller('activity')
export class ActivityController {
    constructor(private activityService: ActivityService){ }

    @Post()
    async createActivity(@Body() body: ActivityDto) : Promise<ActivityModel>{
        return await this.activityService.create(body);
    }

    @Get()
    async getAllActivities(): Promise<ActivityModel[]>{
        return await this.activityService.findAll();
    }

    @Get(':id')
    async getActivityById(@Param() params): Promise<ActivityModel>{
        return await this.activityService.findOne(params.id);
    }

    @Put(':id')
    async updateActivity(@Param('id') id: string, @Body() activityDto: ActivityDto) : Promise<ActivityModel>{
        return await this.activityService.update(id, activityDto);
    }

    @Delete(':id')
    async removeActivity(@Param('id') id: string) : Promise<ActivityModel>{
        return await this.activityService.delete(id);
    }
}
