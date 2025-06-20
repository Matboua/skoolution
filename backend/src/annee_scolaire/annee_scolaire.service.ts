import { Injectable } from '@nestjs/common';
import { CreateAnneeScolaireDto } from './dto/create-annee_scolaire.dto';
import { UpdateAnneeScolaireDto } from './dto/update-annee_scolaire.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Annee_scolaire, Annee_scolaireDocument } from 'src/schemas/annee_scolaire.schema';
import { Model } from 'mongoose';

@Injectable()
export class AnneeScolaireService {
  constructor(
    @InjectModel(Annee_scolaire.name) private readonly anneeScolaireModel: Model<Annee_scolaireDocument>, // Replace 'any' with the actual type if available
  ) {}
  async create(createAnneeScolaireDto: CreateAnneeScolaireDto) {
    try {
      const anneeScolaire = await this.anneeScolaireModel.create({
        date_debut: createAnneeScolaireDto.annee_scolaire,
        date_fin: createAnneeScolaireDto.date_fin,
      });
      return { success: true, anneeScolaire };
    } catch (error) {
      console.error('Error creating anneeScolaire:', error);
      return { success: false, error: 'An error occurred while creating the anneeScolaire' };
    }
  }

  async findAll() {
    try {
      const anneeScolaires = await this.anneeScolaireModel.find();
      return { success: true, anneeScolaires };
    } catch (error) {
      console.error('Error fetching anneeScolaires:', error);
      return { success: false, error: 'An error occurred while fetching the anneeScolaires' };
    }
  }

  async findOne(id: number) {
    try {
      const anneeScolaire = await this.anneeScolaireModel.findById(id);
      if (!anneeScolaire) {
        return { success: false, error: 'Annee scolaire not found' };
      }
      return { success: true, anneeScolaire };
    } catch (error) {
      console.error('Error fetching annee scolaire:', error);
      return { success: false, error: 'An error occurred while fetching the annee scolaire' };
    }
  }

  async update(id: number, updateAnneeScolaireDto: UpdateAnneeScolaireDto) {
    try {
      const anneeScolaire = await this.anneeScolaireModel.findByIdAndUpdate(
        id,
        updateAnneeScolaireDto,
        { new: true },
      );
      if (!anneeScolaire) {
        return { success: false, error: 'Annee scolaire not found' };
      }
      return { success: true, anneeScolaire };
    } catch (error) {
      console.error('Error updating annee scolaire:', error);
      return { success: false, error: 'An error occurred while updating the annee scolaire' };
    }
  }

  async remove(id: string) {
    try {
      const result = await this.anneeScolaireModel.findByIdAndDelete(id);
      if (!result) {
        return { success: false, error: 'Annee scolaire not found' };
      }
      return { success: true, message: 'Annee scolaire deleted successfully' };
    } catch (error) {
      console.error('Error deleting annee scolaire:', error);
      return { success: false, error: 'An error occurred while deleting the annee scolaire' };
    }
  }
}
