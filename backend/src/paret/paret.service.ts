import { Injectable } from '@nestjs/common';
import { CreateParetDto } from './dto/create-paret.dto';
import { UpdateParetDto } from './dto/update-paret.dto';

@Injectable()
export class ParetService {
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
