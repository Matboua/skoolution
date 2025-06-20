import { Test, TestingModule } from '@nestjs/testing';
import { AnneeScolaireController } from './annee_scolaire.controller';
import { AnneeScolaireService } from './annee_scolaire.service';

describe('AnneeScolaireController', () => {
  let controller: AnneeScolaireController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnneeScolaireController],
      providers: [AnneeScolaireService],
    }).compile();

    controller = module.get<AnneeScolaireController>(AnneeScolaireController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
