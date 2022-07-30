import { Attendee } from 'src/attendees/entities/attendee.entity';
import { Speaker } from '../entities/speaker.entity';

export class CreateTalkDto {
  speaker: Speaker;
  title: string;
  abstract: string;
  room: number;
  attendees: Attendee[];
}
