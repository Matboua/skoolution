import { PartialType } from '@nestjs/mapped-types';
import { CreateAnneeScolaireDto } from './create-annee_scolaire.dto';

export class UpdateAnneeScolaireDto extends PartialType(CreateAnneeScolaireDto) {}
