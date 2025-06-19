import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Parent, ParentDocument } from 'src/schemas/parent.schema';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateParentDto } from "../dto/parent.dto"

@Injectable()
export class ParetService {
  constructor(
    @InjectModel(Parent.name) private ParentModel: Model<ParentDocument>,
    @InjectModel(User.name) private UserModel: Model<UserDocument>
  ) { }
  create(createParetDto: CreateParentDto) {
    try {
      const user = this.UserModel.findOne({
        _id: createParetDto.id
      })
      if (!user) {
        return { success: false, error: "User not found" };
      }
      const parent = this.ParentModel.create({
        user_ID: createParetDto.id,
        address: createParetDto.address
      });
      if (!parent) {
        return { success: false, error: "Parent creation failed" };
      }
      return { success: true, parent };
    } catch (error) {
      console.log(error);
      return { error: "An error occurred while creating the parent", success: false };
    }
  }

  findAll() {
    return `This action returns all paret`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paret`;
  }

  update(id: number,) {
    return `This action updates a #${id} paret`;
  }

  remove(id: number) {
    return `This action removes a #${id} paret`;
  }
}
