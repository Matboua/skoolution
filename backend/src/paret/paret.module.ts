import { Module } from '@nestjs/common';
import { ParetService } from './paret.service';
import { ParetController } from './paret.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Parent, ParentSchema } from 'src/schemas/parent.schema';
import { User, UserSchema } from 'src/schemas/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Parent.name, schema: ParentSchema }, { name: User.name, schema: UserSchema }])],
  controllers: [ParetController],
  providers: [ParetService],
})
export class ParetModule { }
