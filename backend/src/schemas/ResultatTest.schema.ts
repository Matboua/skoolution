import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument,Types } from 'mongoose';
import * as mongoose from 'mongoose';

export type ResultatTestDocument = HydratedDocument<ResultatTest> ;

@Schema()
export class ResultatTest {
  @Prop({ type: Types.ObjectId, ref: 'Eleve', required: true })
  eleve_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Test', required: true })
  test_id: Types.ObjectId;

  @Prop({ required: true, type: Date })
  date_passage: Date;

  @Prop({ required: true })
  score_global: number;

  @Prop({ required: true })
  theta_estime: number;
}

export const ResultatTestSchema = SchemaFactory.createForClass(ResultatTest);
