import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type CompetenceDocument = HydratedDocument<Competence> ;

@Schema()
export class Competence {
  @Prop({ required: true })
  description: string;
}

export const CompetenceSchema = SchemaFactory.createForClass(Competence);
