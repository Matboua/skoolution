import { Module } from '@nestjs/common';
import { ParetService } from './paret.service';
import { ParetController } from './paret.controller';

@Module({
  imports:[],
  controllers: [ParetController],
  providers: [ParetService],
})
export class ParetModule {}
