import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from 'src/schemas/student.schema';
import { Model } from "mongoose"
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateStudentDto } from './dto/Student.dto';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel(Student.name) private StudentModel: Model<StudentDocument>,
        @InjectModel(User.name) private UserModel: Model<UserDocument>
    ) { }
    async complaitAccount(id: string, Student: CreateStudentDto) {
        try {
            // check if the student alredy exists
            const existingStudent = await this.StudentModel.findOne({ user_ID: id });
            if (existingStudent) {
                return { success: false, message: 'Student already exists' };
            }
            // Create a new student
            const newStudent = await this.StudentModel.create({
                user_ID: id,
                address: Student.address,
                date_naissance: Student.date_naissance,
                id_parent: Student.id_parent,
                code_Massar: Student.code_Massar,
                ecole: Student.ecole,
                journal: Student.journal,
                annee_scolaire_id: Student.annee_scolaire_id,
                niveau_id: Student.niveau_id,
                filiere_id: Student.filiere_id
            })
            if (!newStudent) {
                return { success: false, message: 'Error creating student' };
            }
            return { success: true, message: 'Student created successfully', student: newStudent };
        } catch (error) {
            console.log(error);
            return { success: false, message: 'Error creating account', error: error.message };
        }
    }
}
