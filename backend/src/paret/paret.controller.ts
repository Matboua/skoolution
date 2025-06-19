import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParetService } from './paret.service';


@Controller('paret')
export class ParetController {
  constructor(private readonly paretService: ParetService) {}

  
}
