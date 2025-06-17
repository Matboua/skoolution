import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type Annee_scolaireDocument = HydratedDocument<Annee_scolaire>;

@Schema()
export class Annee_scolaire {
  @Prop({ required: true })
  date_debut: Date
  @Prop({ required: true })
  date_fin: Date
}

export const Annee_scolaireSchema = SchemaFactory.createForClass(Annee_scolaire);
