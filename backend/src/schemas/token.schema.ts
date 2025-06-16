import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from "mongoose";
import { User } from './user.schema';
import { Timestamp } from 'rxjs';
import { userTypes } from 'types/userTypes';

export type TokenDocument = HydratedDocument<Token>;

@Schema()
export class Token {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  user_ID: User
  @Prop({ required: true })
  token: string
  @Prop({ required: true, type: Date, default: Date.now() })
  date_creation: Date
  @Prop({ required: true, type: Date,})
  date_expiration: Date
  @Prop({required:true,type:userTypes})
  type:userTypes
}

export const TokenSchema = SchemaFactory.createForClass(Token);
