import { Module } from '@nestjs/common';
import { AnneeScolaireService } from './annee_scolaire.service';
import { AnneeScolaireController } from './annee_scolaire.controller';

@Module({
  controllers: [AnneeScolaireController],
  providers: [AnneeScolaireService],
})
export class AnneeScolaireModule {}
