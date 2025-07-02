import { Test, TestingModule } from '@nestjs/testing';
import { ParetController } from './paret.controller';
import { ParetService } from './paret.service';

describe('ParetController', () => {
  let controller: ParetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParetController],
      providers: [ParetService],
    }).compile();

    controller = module.get<ParetController>(ParetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
