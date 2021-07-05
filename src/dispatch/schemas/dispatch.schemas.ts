import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { DestinationCoordinates } from 'src/orders/entities/dCoordinates.entity';

export type DispatchDocument = Dispatch & Document;

@Schema()
export class Dispatch {
  @Prop()
  title: string;

  @Prop()
  branch: number;

  @Prop()
  number: number;

  @Prop()
  description: string;

  @Prop()
  status: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'orders' }] })
  orderRefered: mongoose.Schema.Types.ObjectId;

  @Prop()
  sendOn: Date;
}

export const DispatchSchema = SchemaFactory.createForClass(Dispatch);
