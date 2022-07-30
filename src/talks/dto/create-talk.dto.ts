import { IsNumber, IsPositive, IsString, MinLength } from 'class-validator';

export class CreateTalkDto {
  @IsString()
  @MinLength(3)
  speaker: string;

  @IsString()
  @MinLength(3)
  title: string;

  @IsString()
  @MinLength(3)
  abstract: string;

  @IsNumber()
  @IsPositive()
  room: number;
}
