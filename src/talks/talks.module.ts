import { Module } from '@nestjs/common';
import { TalksService } from './talks.service';
import { TalksController } from './talks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Speaker, Talk } from './entities';

@Module({
  controllers: [TalksController],
  providers: [TalksService],
  imports: [TypeOrmModule.forFeature([Talk, Speaker])],
})
export class TalksModule {}
