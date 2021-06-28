import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderClass } from './entities/order.entity';
import { OrderDocument, Order } from './schemas/orders.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class OrdersService {

  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const createdOrder = new this.orderModel(createOrderDto);
    return createdOrder.save();
  }

  findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async findOne(id: mongoose.Types.ObjectId): Promise<Order> {
    return this.orderModel.findById(id).exec();
  }

  async update(id: mongoose.Types.ObjectId, updateOrderDto: CreateOrderDto): Promise<Order> {
    const filter = { _id: id }
    return this.orderModel.findOneAndUpdate(filter,updateOrderDto, {new: true}).exec();
  }

  remove(id: mongoose.Types.ObjectId){
    return this.orderModel.findByIdAndDelete(id);
    
    
    
  }
}
