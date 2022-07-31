import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Attendee {
  @PrimaryGeneratedColumn('uuid')
  key: string;

  @Column('text', { unique: true })
  name: string;

  @Column('text', { unique: true })
  company: string;

  @Column('text', { unique: true })
  email: string;

  @Column('text', { unique: true })
  registered: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
