import { IsNotEmpty } from 'class-validator';
import { IsMongoId } from '../../helpers/IsMongoId';

export class ResetPasswordDto {
  @IsNotEmpty()
  @IsMongoId({ message: 'Invalid user ID' })
  userId: string;

  @IsNotEmpty()
  newPassword: string;

  @IsNotEmpty()
  confirmPassword: string;
}
