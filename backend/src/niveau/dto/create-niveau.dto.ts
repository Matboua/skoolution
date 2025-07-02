import { IsString, isString } from "class-validator";

export class CreateNiveauDto {
    @IsString()
    name: string;
}
