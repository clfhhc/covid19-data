import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  _id!: number;

  @Column({
    unique: true,
    length: 2,
  })
  ISO2!: string;

  @Column()
  Slug!: string;

  @Column()
  Country!: string;
}

export default Country;
