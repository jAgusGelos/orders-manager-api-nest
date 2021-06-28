import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import * as mongoose from 'mongoose';


@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const newId = mongoose.Types.ObjectId(id);
    return this.ordersService.findOne(newId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() createOrderDto: CreateOrderDto) {
    const newId = mongoose.Types.ObjectId(id);
    return this.ordersService.update(newId, createOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const newId = mongoose.Types.ObjectId(id);
    return this.ordersService.remove(newId);
  }
}
