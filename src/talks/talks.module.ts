import { Module } from '@nestjs/common';
import { TalksService } from './talks.service';
import { TalksController } from './talks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Talk } from './entities/talk.entity';

@Module({
  controllers: [TalksController],
  providers: [TalksService],
  imports: [TypeOrmModule.forFeature([Talk])],
})
export class TalksModule {}
