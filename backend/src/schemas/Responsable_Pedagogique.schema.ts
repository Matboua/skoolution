import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

export type Responsable_PedagogiqueDocument = HydratedDocument<Responsable_Pedagogique>;

@Schema()
export class Responsable_Pedagogique {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "User" })
  user_ID: User
  @Prop({ required: true })
  profession: string
}

export const Responsable_PedagogiqueSchema = SchemaFactory.createForClass(Responsable_Pedagogique);
