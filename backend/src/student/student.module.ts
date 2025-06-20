import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from 'src/schemas/student.schema';
import { User, UserSchema } from 'src/schemas/user.schema';
import { Parent, ParentSchema } from 'src/schemas/parent.schema';
import { Echol, EcholSchema } from 'src/schemas/echol.schema';
import { Annee_scolaire, Annee_scolaireSchema } from 'src/schemas/annee_scolaire.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema },
  { name: User.name, schema: UserSchema },
  { name: Parent.name, schema: ParentSchema },
  { name: Echol.name, schema: EcholSchema },
  { name: Annee_scolaire.name, schema: Annee_scolaireSchema }]
  )],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule { }
