import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { DispatchModule } from './dispatch/dispatch.module';
import { environment } from 'develop.env';

@Module({
  imports: [
    OrdersModule,
    MongooseModule.forRoot(environment.MONGODB_CONNECTION),
    AuthModule,
    UsersModule,
    DispatchModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
