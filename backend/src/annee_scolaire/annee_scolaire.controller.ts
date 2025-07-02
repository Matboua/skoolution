import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { AnneeScolaireService } from './annee_scolaire.service';
import { CreateAnneeScolaireDto } from './dto/create-annee_scolaire.dto';
import { UpdateAnneeScolaireDto } from './dto/update-annee_scolaire.dto';
import { Response } from 'express';

@Controller('annee-scolaire')
export class AnneeScolaireController {
  constructor(private readonly anneeScolaireService: AnneeScolaireService) { }

  @Post()
  async create(@Body() createAnneeScolaireDto: CreateAnneeScolaireDto, @Res() res: Response) {
    const response = await this.anneeScolaireService.create(createAnneeScolaireDto);
    if (response.success) {
      return res.status(201).json(response);
    } else {
      return res.status(400).json(response);
    }
  }

  @Get("all")
  async findAll(@Res() res: Response) {
    const response = await this.anneeScolaireService.findAll();
    if (response.success) {
      return res.status(200).json(response);
    } else {
      return res.status(400).json(response);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const response = await this.anneeScolaireService.findOne(+id);
    if (response.success) {
      return response;
    } else {
      return { success: false, error: response.error };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAnneeScolaireDto: UpdateAnneeScolaireDto) {
    const response = await this.anneeScolaireService.update(+id, updateAnneeScolaireDto);
    if (response.success) {
      return response;
    } else {
      return { success: false, error: response.error };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const response = await this.anneeScolaireService.remove(id);
    if (response.success) {
      return response;
    } else {
      return { success: false, error: response.error };
    }
  }
}
