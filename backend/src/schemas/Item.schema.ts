import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { ObjectifSpecifique } from './ObjectifSpecifique.schema';
import { Niveau_Taxonomique } from './Niveau_Taxonomique.schema';

export type ItemDocument = HydratedDocument<Item>;

@Schema()
export class Item {
  @Prop({ required: true })
  question: string;
  @Prop({ required: true })
  support_type: string;
  @Prop({ required: true })
  support_url: string;
  @Prop({ required: true })
  Choix: [];
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "ObjectifSpecifique" })
  objectif_specifique_id: ObjectifSpecifique;
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "Niveau_Taxonomique" })
  niveau_taxonomique_id: Niveau_Taxonomique;
  @Prop({ required: true })
  difficultee_b: number;
  @Prop({ required: true })
  discrimination_a: number;
  @Prop({ required: true })
  c_param: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
