import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class GyumolcsData {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nev: string;

    @Column()
    darab:  number;
}