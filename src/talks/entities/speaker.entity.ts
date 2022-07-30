import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

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
}
