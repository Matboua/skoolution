import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Sous_Chapitre } from './Sous_Chapitre.schema';
import { Competence } from './Competence.schema';

export type SousChapitre_CompetenceDocument = HydratedDocument<SousChapitre_Competence>;

@Schema()
export class SousChapitre_Competence {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "Sous_Chapitre" })
  sous_chapitre_id: Sous_Chapitre;
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "Competence" })
  competence_id: Competence;
}

export const SousChapitre_CompetenceSchema = SchemaFactory.createForClass(SousChapitre_Competence);
