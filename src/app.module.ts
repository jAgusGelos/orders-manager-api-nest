import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [OrdersModule,
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.g4u4c.mongodb.net/orders-manager?retryWrites=true&w=majority')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
