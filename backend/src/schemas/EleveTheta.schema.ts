import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Student } from './student.schema';
import { Competence } from './Competence.schema';

export type EleveThetaDocument = HydratedDocument<EleveTheta>;

@Schema()
export class EleveTheta {
  @Prop({ required: true })
  theta: number;
  @Prop({required:true,type:mongoose.Schema.Types.ObjectId,ref:"Student"})
  eleve_id:Student
  @Prop({required:true,type:mongoose.Schema.Types.ObjectId,ref:"Competence"})
  competence_id:Competence
}

export const EleveThetaSchema = SchemaFactory.createForClass(EleveTheta);
