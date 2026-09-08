import { Prisma, QuestionType } from '../../generated/prisma/client';
import { Type } from 'class-transformer';

import {
  IsArray,
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';

export class CreateQuizDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuestionDto)
  questions: CreateQuestionDto[];
}

export class CreateQuestionDto {
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsEnum(QuestionType)
  type: QuestionType;

  @IsArray()
  @IsString({ each: true })
  options: string[];

  @IsDefined()
  correctAnswer: Prisma.InputJsonValue;
}
