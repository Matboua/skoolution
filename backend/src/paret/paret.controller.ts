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
  async findAll(@Res() res: Response) {
    const response = await this.paretService.findAll();
    if (response.success) {
      return res.status(200).json(response);
    } else {
      return res.status(400).json(response);
    }
  }
  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const response = await this.paretService.findOne(id);
    if (response.success) {
      return res.status(200).json(response);
    } else {
      return res.status(404).json(response);
    }
  }
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateParetDto: UpdateParentDto, @Res() res: Response) {
    const response =  await this.paretService.update(id, updateParetDto);
    if (response.success) {
      return res.status(200).json(response);
    } else {
      return res.status(400).json(response);
    }
  }
}
