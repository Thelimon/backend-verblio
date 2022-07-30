import { Module } from '@nestjs/common';
import { TalksService } from './talks.service';
import { TalksController } from './talks.controller';
import { Speaker } from './entities/speaker.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TalksController],
  providers: [TalksService],
  imports: [TypeOrmModule.forFeature([Speaker])],
})
export class TalksModule {}
