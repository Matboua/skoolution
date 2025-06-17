import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Matiere } from './Matiere.schema';

export type ControleDocument = HydratedDocument<Controle>;

@Schema()
export class Controle {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "Matiere" })
  matiere_id: Matiere
}

export const ControleSchema = SchemaFactory.createForClass(Controle);
