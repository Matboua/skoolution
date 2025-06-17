import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

export type ParentDocument = HydratedDocument<Parent>;

@Schema()
export class Parent {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "User" })
  user_ID: User
  @Prop({required:true})
  address:string
}

export const ParentSchema = SchemaFactory.createForClass(Parent);
