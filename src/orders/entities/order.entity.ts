import { DestinationCoordinates } from './dCoordinates.entity';
import { Sender } from './sender.entity';

export class Order {
  _id: string;
  title: string;
  description: string;
  status: string;
  sender: Sender;
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
