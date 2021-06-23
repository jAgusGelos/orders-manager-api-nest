import { DestinationCoordinates } from "../entities/dCoordinates.entity";
import { Sender } from "../entities/sender.entity";

export class CreateOrderDto {
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
