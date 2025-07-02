import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { HydratedDocument, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { Item } from './Item.schema';

export type TestItemDocument = HydratedDocument<TestItem>;

@Schema()
export class TestItem {
  @Prop({ type: Types.ObjectId, ref: 'Test', required: true })
  test_id: Test;

  @Prop({ type: Types.ObjectId, ref: 'Item', required: true })
  item_id: Item;

  @Prop({ required: true })
  ordre: number;
}

export const TestItemSchema = SchemaFactory.createForClass(TestItem);
