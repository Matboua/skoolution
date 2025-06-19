import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Parent, ParentDocument } from 'src/schemas/parent.schema';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateParentDto, UpdateParentDto } from "../dto/parent.dto"
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ParetService {
  constructor(
    @InjectModel(Parent.name) private ParentModel: Model<ParentDocument>,
    @InjectModel(User.name) private UserModel: Model<UserDocument>,
    private jwtservice: JwtService
  ) { }
  async create(createParetDto: CreateParentDto) {
    try {
      const user = await this.UserModel.findOne({
        _id: createParetDto.id
      })
      if (!user) {
        return { success: false, error: "User not found" };
      }
      const parent = await this.ParentModel.create({
        user_ID: createParetDto.id,
        address: createParetDto.address
      });
      if (!parent) {
        return { success: false, error: "Parent creation failed" };
      }
      const token = this.jwtservice.sign({
        sub: { id: user._id, role: user.type },
      });
      return { success: true, token, parent: parent };
    } catch (error) {
      console.log(error);
      return { error: "An error occurred while creating the parent", success: false };
    }
  }

  async findAll() {
    try {
      const Parents = await this.ParentModel.find().populate("user_ID");
      return { success: true, Parents };
    } catch (error) {
      console.log(error);
      return { error: "An error occurred while creating the parent", success: false };
    }
  }

  async findOne(id: string) {
    const parent = this.ParentModel.findById(id).populate("user_ID");
    if (!parent) {
      return { success: false, error: "Parent not found" };
    }
    return { success: true, parent };
  }

  update(id: number,ParentDto: UpdateParentDto) {
    try {
      const updatedParent = this.ParentModel.findByIdAndUpdate(id, ParentDto, { new: true }).populate("user_ID");
      if (!updatedParent) {
        return { success: false, error: "Parent not found" };
      }
      return { success: true, parent: updatedParent };
    } catch (error) {
      console.log(error);
      return { error: "An error occurred while updating the parent", success: false };
    }
  }

  remove(id: number) {
    return `This action removes a #${id} paret`;
  }
}
