import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type MatiereDocument = HydratedDocument<Matiere>;

@Schema()
export class Matiere {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  coefficient: string;
}

export const MatiereSchema = SchemaFactory.createForClass(Matiere);
