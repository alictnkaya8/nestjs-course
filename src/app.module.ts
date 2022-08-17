import { Module } from '@nestjs/common';
import environment from 'tools/environment/environment';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LibsModule } from 'libs/libs.module';
import { RoleModule } from './role/role.module';
import { ProductModule } from './product/product.module';
import { ActivityModule } from './activity/activity.module';
import { GroupModule } from './group/group.module';
import { InventoryModule } from './inventory/inventory.module';
import { TicketModule } from './ticket/ticket.module';
import { ProductTypeModule } from './product/product-type/product-type.module';
import { ActivityTypeModule } from './activity/activity-type/activity-type.module';
import { InventoryTypeModule } from './inventory/inventory-type/inventory-type.module';
import { TicketTypeModule } from './ticket/ticket-type/ticket-type.module';
import { TotalModule } from './total/total.module';

@Module({
  imports: [ UserModule, RoleModule, ProductModule, ActivityModule, GroupModule, InventoryModule, TicketModule, ProductTypeModule, ActivityTypeModule, InventoryTypeModule, TicketTypeModule, LibsModule, TotalModule, MongooseModule.forRoot(environment.mongoUrl)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
