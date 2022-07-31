import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Talk } from '../../talks/entities';

@Entity()
export class Attendee {
  @PrimaryGeneratedColumn('uuid')
  key: string;

  @Column('text')
  name: string;

  @Column('text')
  company: string;

  @Column('text')
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Talk, (talk) => talk.attendees)
  talk: Talk;
}
