import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Competence } from './Competence.schema';
import { Sous_Chapitre } from './Sous_Chapitre.schema';

export type ObjectifSpecifiqueDocument = HydratedDocument<ObjectifSpecifique>;

@Schema()
export class ObjectifSpecifique {
  @Prop({ required: true })
  description: string;
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "Competence" })
  competence_id: Competence;
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "Sous_Chapitre" })
  sous_chapitre_id: Sous_Chapitre;

}

export const ObjectifSpecifiqueSchema = SchemaFactory.createForClass(ObjectifSpecifique);
