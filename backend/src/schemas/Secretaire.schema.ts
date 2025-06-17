import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

export type SecretaireDocument = HydratedDocument<Secretaire> ;

@Schema()
export class Secretaire {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "User" })
  user_ID: User
}

export const SecretaireSchema = SchemaFactory.createForClass(Secretaire);
