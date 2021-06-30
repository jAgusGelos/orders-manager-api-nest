import { PartialType } from '@nestjs/swagger';
import { CreateDispatchDto } from './create-dispatch.dto';

export class UpdateDispatchDto extends PartialType(CreateDispatchDto) {}
