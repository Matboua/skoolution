import { Injectable } from '@nestjs/common';
import { CreateNiveauDto } from './dto/create-niveau.dto';
import { UpdateNiveauDto } from './dto/update-niveau.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Niveau } from 'src/schemas/Niveau.schema';
import { Model } from 'mongoose';

@Injectable()
export class NiveauService {
  constructor(
    @InjectModel(Niveau.name) private niveauModel: Model<Niveau>
  ) { }
  async create(createNiveauDto: CreateNiveauDto) {
    try {
      const newNiveau = await this.niveauModel.create(createNiveauDto);
      if (!newNiveau) {
        return { success: false, message: 'Error creating niveau' };
      }
      return { success: true, message: 'Niveau created successfully', newNiveau };
    } catch (error) {
      console.error(error);
      return { success: false, message: 'Error creating niveau', error: error.message };
    }
  }

  async findAll() {
    try {
      const niveaux = await this.niveauModel.find();
      if (!niveaux || niveaux.length === 0) {
        return { success: false, message: 'No niveaux found' };
      }
      return { success: true, niveaux };
    } catch (error) {
      console.error(error);
      return { success: false, message: 'Error finding niveaux', error: error.message };
    }
  }

  async findOne(id: number) {
    try {
      const niveau = await this.niveauModel.findById(id);
      if (!niveau) {
        return { success: false, message: `Niveau with id ${id} not found` };
      }
      return { success: true, niveau };
    } catch (error) {
      console.error(error);
      return { success: false, message: 'Error finding niveau', error: error.message };
    }
  }

  async update(id: string, updateNiveauDto: UpdateNiveauDto) {
    try {
      const updatedNiveau = await this.niveauModel.findByIdAndUpdate(id,
        updateNiveauDto,
        { new: true }
      );
      if (!updatedNiveau) {
        return { success: false, message: `Niveau with id ${id} not found` };
      }
      return { success: true, message: 'Niveau updated successfully', updatedNiveau };
    } catch (error) {
      console.error(error);
      return { success: false, message: 'Error updating niveau', error: error.message };
    }
  }

  async remove(id: string) {
    try {
      const deletedNiveau = await this.niveauModel.findByIdAndDelete(id);
      if (!deletedNiveau) {
        return { success: false, message: `Niveau with id ${id} not found` };
      }
      return { success: true, message: 'Niveau removed successfully', deletedNiveau };
    } catch (error) {
      console.error(error);
      return { success: false, message: 'Error removing niveau', error: error.message };
    }
  }
}
