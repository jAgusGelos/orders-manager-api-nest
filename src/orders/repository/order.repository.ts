import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Order } from '../schemas/orders.schema';

@Injectable()
export class OrderRepository {
  constructor(private orderModel: Model<Order>) {}

  async findAll(): Promise<Order[]> {
    return this.orderModel.find();
  }
}
