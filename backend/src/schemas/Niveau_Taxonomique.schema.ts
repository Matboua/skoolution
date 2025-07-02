import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type Niveau_TaxonomiqueDocument = HydratedDocument<Niveau_Taxonomique> ;

@Schema()
export class Niveau_Taxonomique {
  @Prop({ required: true })
  Nom_niveau: string;
  @Prop({ required: true })
  description: string;
}

export const Niveau_TaxonomiqueSchema = SchemaFactory.createForClass(Niveau_Taxonomique);
