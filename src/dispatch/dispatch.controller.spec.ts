import { Test, TestingModule } from '@nestjs/testing';
import { DispatchController } from './dispatch.controller';
import { DispatchService } from './dispatch.service';

describe('DispatchController', () => {
  let controller: DispatchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DispatchController],
      providers: [DispatchService],
    }).compile();

    controller = module.get<DispatchController>(DispatchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
