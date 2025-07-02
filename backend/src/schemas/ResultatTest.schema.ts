import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument,Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { Student } from './student.schema';
import { Test } from './test.schema';

export type ResultatTestDocument = HydratedDocument<ResultatTest> ;

@Schema()
export class ResultatTest {
  @Prop({ type: Types.ObjectId, ref: 'Student', required: true })
  eleve_id: Student;

  @Prop({ type: Types.ObjectId, ref: 'Test', required: true })
  test_id: Test;

  @Prop({ required: true, type: Date })
  date_passage: Date;

  @Prop({ required: true })
  score_global: number;

  @Prop({ required: true })
  theta_estime: number;
}

export const ResultatTestSchema = SchemaFactory.createForClass(ResultatTest);
