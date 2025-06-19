import { IsString, IsOptional } from 'class-validator';
import { IsMongoId } from 'helpers/IsMongoId';

export class CreateParentDto {
  @IsString()
  address: string;
  @IsMongoId()
  id: string;
}

export class UpdateParentDto {
  @IsOptional()
  @IsString()
  address?: string;
}
