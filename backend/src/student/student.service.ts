import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from 'src/schemas/student.schema';
import { Model } from "mongoose"
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel(Student.name) private StudentModel: Model<StudentDocument>,
        @InjectModel(User.name) private UserModel: Model<UserDocument>
    ) { }
    complaitAccount(Student:any){
        try {
            
        } catch (error) {
            console.log(error);
        }
    }
}
