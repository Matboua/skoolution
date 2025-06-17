import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type NiveauDocument = HydratedDocument<Niveau> ;

@Schema()
export class Niveau {
  @Prop({ required: true })
  name: string;
}

export const NiveauSchema = SchemaFactory.createForClass(Niveau);
