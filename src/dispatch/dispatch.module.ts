import { Module } from '@nestjs/common';
import { DispatchService } from './dispatch.service';
import { DispatchController } from './dispatch.controller';

@Module({
  controllers: [DispatchController],
  providers: [DispatchService]
})
export class DispatchModule {}
