import { Module } from '@nestjs/common';
import { TalksService } from './talks.service';
import { TalksController } from './talks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Speaker, Talk } from './entities';
import { Attendee } from '../attendees/entities/attendee.entity';

@Module({
  controllers: [TalksController],
  providers: [TalksService],
  imports: [TypeOrmModule.forFeature([Talk, Speaker, Attendee])],
})
export class TalksModule {}
