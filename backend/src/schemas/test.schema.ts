import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type TestDocument = HydratedDocument<Test> ;

@Schema()
export class Test {
  @Prop({ required: true })
  titre: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, type: Date })
  date_debut: Date;

  @Prop({ required: true, type: Date })
  date_fin: Date;

  @Prop({ required: true })
  type: string;
}

export const TestSchema = SchemaFactory.createForClass(Test);
