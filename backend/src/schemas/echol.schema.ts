import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { AdminEcole } from './AdminEcole.schema';

export type EcholDocument = HydratedDocument<Echol> ;

@Schema()
export class Echol {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  addresse:string
  @Prop({ required: true })
  ville:string
  @Prop({required:true,type:mongoose.Schema.Types.ObjectId,ref:"AdminEcole"})
  Admin_ID:AdminEcole
}

export const EcholSchema = SchemaFactory.createForClass(Echol);
