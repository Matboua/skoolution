import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParetService } from './paret.service';


@Controller('paret')
export class ParetController {
  constructor(private readonly paretService: ParetService) {}
  @Post('create')
  create(@Body() createParetDto: any) {
    return this.paretService.create(createParetDto);
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
  update(@Param('id') id: string, @Body() updateParetDto: any) {
    return this.paretService.update(id, updateParetDto);
  }
}
