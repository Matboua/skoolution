import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

export type StudentDocument = HydratedDocument<Student>;

@Schema()
export class Student {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "User" })
  user_ID: User
}

export const StudentSchema = SchemaFactory.createForClass(Student);
