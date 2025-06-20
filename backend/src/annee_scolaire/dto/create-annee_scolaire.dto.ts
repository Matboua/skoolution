import { IsAfterOneYear, IsnotBeforThisYear } from "helpers/datvalidator";

export class CreateAnneeScolaireDto {
    @IsnotBeforThisYear()
    annee_scolaire: Date;
    @IsAfterOneYear()
    date_fin: Date;
}
