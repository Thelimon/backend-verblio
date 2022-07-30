import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

  @OneToOne(() => Talk, (talk) => talk.speaker)
  @JoinColumn()
  talk: Talk;
}
