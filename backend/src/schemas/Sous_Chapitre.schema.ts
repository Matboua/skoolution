import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Chapitre } from './Chapitre.schema';

export type Sous_ChapitreDocument = HydratedDocument<Sous_Chapitre>;

@Schema()
export class Sous_Chapitre {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true, tye: mongoose.Schema.Types.ObjectId, ref: "Chapitre" })
  semestre_id: Chapitre;
}

export const Sous_ChapitreSchema = SchemaFactory.createForClass(Sous_Chapitre);
