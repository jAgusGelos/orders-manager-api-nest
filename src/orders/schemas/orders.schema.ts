import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DestinationCoordinates } from '../entities/dCoordinates.entity';
import { Sender } from '../entities/sender.entity';
import * as mongoose from 'mongoose';


export type OrderDocument = Order & Document;

@Schema()
export class Order {


    @Prop()
    title: string;
    
    @Prop()
    description: string;

    @Prop()
    status: string;

    // No se como
    @Prop([Sender])
    sender: Sender;

    @Prop()
    destinationAddress: string;

    @Prop()
    destinationCity: string;

    @Prop()
    destinationCountry: string;

    // No se como
    @Prop([DestinationCoordinates])
    destinationCoordinates: DestinationCoordinates;

    @Prop()
    price: number;

    @Prop()
    taxApplied: number;

    @Prop()
    weight: number;

    @Prop()
    messureUnit: string;

    @Prop()
    createdOn: Date;

    @Prop()
    favourite: boolean;
}

export const OrderSchema = SchemaFactory.createForClass(Order);