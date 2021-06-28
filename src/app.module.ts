import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [OrdersModule,
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.g4u4c.mongodb.net/orders-manager?retryWrites=true&w=majority'),
    AuthModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
