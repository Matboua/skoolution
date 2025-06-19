import { Injectable } from '@nestjs/common';
import { CreateParetDto } from './dto/create-paret.dto';
import { UpdateParetDto } from './dto/update-paret.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Parent, ParentDocument } from 'src/schemas/parent.schema';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { Mode } from 'fs';

@Injectable()
export class ParetService {
  constructor(
    @InjectModel(Parent.name) private ParentModel: Model<ParentDocument>,
    @InjectModel(User.name) private UserModel: Model<UserDocument>
  ) { }
  create(createParetDto: CreateParetDto) {
    return 'This action adds a new paret';
  }

  findAll() {
    return `This action returns all paret`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paret`;
  }

  update(id: number, updateParetDto: UpdateParetDto) {
    return `This action updates a #${id} paret`;
  }

  remove(id: number) {
    return `This action removes a #${id} paret`;
  }
}
