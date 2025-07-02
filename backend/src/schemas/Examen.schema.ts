import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Matiere } from './Matiere.schema';

export type ExamenDocument = HydratedDocument<Examen>;

@Schema()
export class Examen {
  @Prop({ required: true, tye: mongoose.Schema.Types.ObjectId, ref: "Matiere" })
  matiere_id: Matiere;
}

export const ExamenSchema = SchemaFactory.createForClass(Examen);
