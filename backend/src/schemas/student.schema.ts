import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';
import { Parent } from './parent.schema';
import { Echol } from './echol.schema';
import { Annee_scolaire } from './annee_scolaire.schema';

export type StudentDocument = HydratedDocument<Student>;
// to make laater 

@Schema()
export class Student {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "User" })
  user_ID: User
  @Prop({required:true})
  address:string
  @Prop({required:true,type:Date})
  date_naissance:Date
  @Prop({required:true,type:mongoose.Schema.Types.ObjectId,ref:"Parent"})
  id_parent:Parent
  @Prop({required:true})
  code_Massar:string
  @Prop({required:true,type:mongoose.Schema.Types.ObjectId,ref:"Echol"})
  ecole:Echol
  @Prop({required:true})
  journal:boolean
  @Prop({required:true,type:mongoose.Schema.Types.ObjectId,ref:"Annee_scolaire"})
  annee_scolaire_id:Annee_scolaire
  @Prop({required:true})
  niveau_id:number
  @Prop({required:true})
  filiere_id:number
}

export const StudentSchema = SchemaFactory.createForClass(Student);
