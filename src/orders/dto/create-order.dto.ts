import { DestinationCoordinates } from '../entities/dCoordinates.entity';
import * as mongoose from 'mongoose';

export class CreateOrderDto {
  title: string;
  description: string;
  status: string;
  sender: mongoose.Schema.Types.ObjectId;
  destinationAddress: string;
  destinationCity: string;
  destinationCountry: string;
  destinationCoordinates: DestinationCoordinates;
  price: number;
  taxApplied: number;
  weight: number;
  messureUnit: string;
  createdOn: Date;
  favourite: boolean;
}
