import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Talk {
  @PrimaryGeneratedColumn('uuid')
  key: string;

  @Column('text', { unique: true })
  speaker: string;

  @Column('text', { unique: true })
  title: string;

  @Column('text', { unique: true })
  abstract: string;

  @Column('text', { unique: true })
  room: number;
}
