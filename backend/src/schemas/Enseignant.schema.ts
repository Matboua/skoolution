import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';
import { Echol } from './echol.schema';

export type EnseignantDocument = HydratedDocument<Enseignant> ;

@Schema()
export class Enseignant {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "User" })
  user_ID: User
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "Echol" })
  echole_ID: Echol
}

export const EnseignantSchema = SchemaFactory.createForClass(Enseignant);
