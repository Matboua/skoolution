import { Module } from '@nestjs/common';
import { AnneeScolaireService } from './annee_scolaire.service';
import { AnneeScolaireController } from './annee_scolaire.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Annee_scolaire, Annee_scolaireSchema } from 'src/schemas/annee_scolaire.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Annee_scolaire.name, schema: Annee_scolaireSchema }])],
  controllers: [AnneeScolaireController],
  providers: [AnneeScolaireService],
})
export class AnneeScolaireModule { }
