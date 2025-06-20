import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ParetService } from './paret.service';
import { CreateParentDto, UpdateParentDto } from 'src/dto/parent.dto';
import { Response } from 'express';


@Controller('paret')
export class ParetController {
  constructor(private readonly paretService: ParetService) { }
  @Post('create')
  async create(@Body() createParetDto: CreateParentDto, @Res() res: Response) {
    const response = await this.paretService.create(createParetDto);
    if (response.success) {
      return res.status(201).json(response);
    } else {
      return res.status(400).json(response);
    }
  }
  @Get('all')
  findAll() {
    return this.paretService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paretService.findOne(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParetDto: UpdateParentDto) {
    return this.paretService.update(id, updateParetDto);
  }
}
