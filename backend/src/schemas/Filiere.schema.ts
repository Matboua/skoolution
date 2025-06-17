import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type FiliereDocument = HydratedDocument<Filiere> ;

@Schema()
export class Filiere {
  @Prop({ required: true })
  name: string;
}

export const FiliereSchema = SchemaFactory.createForClass(Filiere);
