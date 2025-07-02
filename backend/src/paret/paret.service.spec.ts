import { Test, TestingModule } from '@nestjs/testing';
import { ParetService } from './paret.service';

describe('ParetService', () => {
  let service: ParetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParetService],
    }).compile();

    service = module.get<ParetService>(ParetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
