import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  phone: number;

  @Prop()
  adress: Array<string>;
}

export const UserSchema = SchemaFactory.createForClass(User);
