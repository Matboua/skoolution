import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Niveau } from './Niveau.schema';
import { Filiere } from './Filiere.schema';

export type NiveauFiliereDocument = HydratedDocument<NiveauFiliere>;

@Schema()
export class NiveauFiliere {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "Niveau" })
  niveau_id: Niveau
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "Filiere" })
  filiere_id: Filiere
}

export const NiveauFiliereSchema = SchemaFactory.createForClass(NiveauFiliere);
