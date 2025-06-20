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
  ){}
  create(createNiveauDto: CreateNiveauDto) {
    return 'This action adds a new niveau';
  }

  findAll() {
    return `This action returns all niveau`;
  }

  findOne(id: number) {
    return `This action returns a #${id} niveau`;
  }

  update(id: number, updateNiveauDto: UpdateNiveauDto) {
    return `This action updates a #${id} niveau`;
  }

  remove(id: number) {
    return `This action removes a #${id} niveau`;
  }
}
