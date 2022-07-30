import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateTalkDto } from './dto/create-talk.dto';
import { UpdateTalkDto } from './dto/update-talk.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Talk } from './entities/talk.entity';

@Injectable()
export class TalksService {
  constructor(
    @InjectRepository(Talk)
    private readonly talksRepository: Repository<Talk>,
  ) {}

  async create(createTalkDto: CreateTalkDto) {
    try {
      const talk = await this.talksRepository.save(createTalkDto);
      await this.talksRepository.save(talk);

      return talk;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Help'!);
    }
  }

  findAll() {
    return `This action returns all talks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} talk`;
  }

  update(id: number, updateTalkDto: UpdateTalkDto) {
    return `This action updates a #${id} talk`;
  }

  remove(id: number) {
    return `This action removes a #${id} talk`;
  }
}
