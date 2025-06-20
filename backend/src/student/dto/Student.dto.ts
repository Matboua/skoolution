import { PartialType } from '@nestjs/mapped-types';
import {
    IsBoolean,
    IsDateString,
    IsMongoId,
    IsNotEmpty,
    IsNumber,
    IsString,
} from 'class-validator';

export class CreateStudentDto {
    @IsMongoId()
    @IsNotEmpty()
    user_ID: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsDateString()
    @IsNotEmpty()
    date_naissance: string;

    @IsMongoId()
    @IsNotEmpty()
    id_parent: string;

    @IsString()
    @IsNotEmpty()
    code_Massar: string;

    @IsMongoId()
    @IsNotEmpty()
    ecole: string;

    @IsBoolean()
    @IsNotEmpty()
    journal: boolean;

    @IsMongoId()
    @IsNotEmpty()
    annee_scolaire_id: string;

    @IsNumber()
    @IsNotEmpty()
    niveau_id: number;

    @IsNumber()
    @IsNotEmpty()
    filiere_id: number;
}
export class UpdateStudentDto extends PartialType(CreateStudentDto) { }