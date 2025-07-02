import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Cours } from './Cours.schema';

export type SemestreDocument = HydratedDocument<Semestre>;

@Schema()
export class Semestre {
  @Prop({ required: true })
  Semestre: number;
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "User" })
  Cours_id: Cours
}

export const SemestreSchema = SchemaFactory.createForClass(Semestre);
