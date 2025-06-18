import {IsEmail,IsNotEmpty,IsString, Length} from "class-validator"

export class loginDTO{
    @IsEmail()
    email:string;
    @IsString()
    @Length(8,20)
    pwd:string
}