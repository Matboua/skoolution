import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

export type AdminEcoleDocument = HydratedDocument<AdminEcole> ;

@Schema()
export class AdminEcole {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "User" })
    user_ID: User
}

export const AdminEcoleSchema = SchemaFactory.createForClass(AdminEcole);
