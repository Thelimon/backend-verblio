import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { CreateTalkDto } from './dto/create-talk.dto';
import { UpdateTalkDto } from './dto/update-talk.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Talk } from './entities/talk.entity';

@Injectable()
export class TalksService {
  private readonly logger = new Logger('TalksService');

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
      this.handleException(error);
    }
  }

  findAll() {
    return this.talksRepository.find({});
  }

  async findOne(id: string) {
    const talk = await this.talksRepository.findOneBy({ key: id });
    if (!talk) throw new BadRequestException('Talk not found');
    return talk;
  }

  update(id: number, updateTalkDto: UpdateTalkDto) {
    return `This action updates a #${id} talk`;
  }

  async remove(id: string) {
    const talk = await this.findOne(id);
    await this.talksRepository.remove(talk);
  }

  private handleException(error: any) {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    throw new InternalServerErrorException(
      'Unexpected error, check server logs'!,
    );
  }
}
