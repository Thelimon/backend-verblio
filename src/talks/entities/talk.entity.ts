import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Speaker } from './speaker.entity';

@Entity()
export class Talk {
  @PrimaryGeneratedColumn('uuid')
  key: string;

  @Column('text', { unique: true })
  title: string;

  @Column('text', { unique: true })
  abstract: string;

  @Column('text', { unique: true })
  room: number;

  @OneToOne(() => Speaker, (speaker) => speaker.talk, { cascade: true })
  speaker: Speaker;
}
