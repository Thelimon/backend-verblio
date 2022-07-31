import {
  IsArray,
  IsNumber,
  IsObject,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';
import { Speaker } from '../entities';
import { Attendee } from '../../attendees/entities/attendee.entity';

export class CreateTalkDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsString()
  @MinLength(3)
  abstract: string;

  @IsNumber()
  @IsPositive()
  room: number;

  @IsObject()
  speaker: Speaker;

  @IsArray()
  attendees: Attendee[];
}
