import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Matiere } from './Matiere.schema';

export type CoursDocument = HydratedDocument<Cours>;

@Schema()
export class Cours {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "Matiere" })
  matiere_id: Matiere
}

export const CoursSchema = SchemaFactory.createForClass(Cours);
