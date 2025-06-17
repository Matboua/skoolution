import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Filiere } from './Filiere.schema';
import { Matiere } from './Matiere.schema';

export type FiliereMatiereDocument = HydratedDocument<FiliereMatiere>;

@Schema()
export class FiliereMatiere {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "Matiere" })
  matiere_id: Matiere
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "Filiere" })
  filiere_id: Filiere
}

export const FiliereMatiereSchema = SchemaFactory.createForClass(FiliereMatiere);
