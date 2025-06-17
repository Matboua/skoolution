import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { userTypes } from 'types/userTypes';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  nom: string;

  @Prop({ required: true })
  prenom: string;

  @Prop({ required: true, unique: true })
  mail: string;

  @Prop({ required: true })
  pwd: string;

  @Prop()
  ville: string;

  @Prop()
  tel: string;

  @Prop({ required: true,enum:userTypes })
  type: userTypes;
}

export const UserSchema = SchemaFactory.createForClass(User);
