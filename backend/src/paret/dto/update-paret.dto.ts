import { PartialType } from '@nestjs/mapped-types';
import { CreateParetDto } from './create-paret.dto';

export class UpdateParetDto extends PartialType(CreateParetDto) {}
