import {
    IsEmail,
    IsNotEmpty,
    IsString,
    IsPhoneNumber,
    IsIn,
    IsInt,
} from 'class-validator';

export class signUPDto {
    @IsString()
    @IsNotEmpty()
    nom: string;

    @IsString()
    @IsNotEmpty()
    prenom: string;

    @IsEmail()
    mail: string;

    @IsString()
    @IsNotEmpty()
    pwd: string;

    @IsString()
    @IsNotEmpty()
    ville: string;

    @IsPhoneNumber('MA') // Adjust 'MA' for your country code if needed
    tel: string;

    @IsIn([
        'Elev',
        'Secretaire',
        'Super_Admin',
        'Parent',
        'Enseignant',
        'Responsable_Pedagogique',
    ])
    type: 'Elev' | 'Secretaire' | 'Super_Admin' | 'Parent' | 'Enseignant' | 'Responsable_Pedagogique';
}
