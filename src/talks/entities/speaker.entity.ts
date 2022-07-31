import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Talk } from './talk.entity';

@Entity()
export class Speaker {
  @PrimaryGeneratedColumn('uuid')
  key: string;

  @Column('text', { unique: true })
  name: string;

  @Column('text', { unique: true })
  company: string;

  @Column('text', { unique: true })
  email: string;

  @Column('text', { unique: true })
  bio: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Talk, (talk) => talk.speaker)
  @JoinColumn()
  talk: Talk;
}
