import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParetService } from './paret.service';
import { CreateParetDto } from './dto/create-paret.dto';
import { UpdateParetDto } from './dto/update-paret.dto';

@Controller('paret')
export class ParetController {
  constructor(private readonly paretService: ParetService) {}

  @Post()
  create(@Body() createParetDto: CreateParetDto) {
    return this.paretService.create(createParetDto);
  }

  @Get()
  findAll() {
    return this.paretService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paretService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParetDto: UpdateParetDto) {
    return this.paretService.update(+id, updateParetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paretService.remove(+id);
  }
}
