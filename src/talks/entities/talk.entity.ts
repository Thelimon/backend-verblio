import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Speaker, (speaker) => speaker.talk, { cascade: true })
  speaker: Speaker;
}
