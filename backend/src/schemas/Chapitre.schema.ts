import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Semestre } from './Semestre.schema';

export type ChapitreDocument = HydratedDocument<Chapitre>;

@Schema()
export class Chapitre {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true, tye: mongoose.Schema.Types.ObjectId, ref: "Semestre" })
  semestre_id: Semestre;
}

export const ChapitreSchema = SchemaFactory.createForClass(Chapitre);
