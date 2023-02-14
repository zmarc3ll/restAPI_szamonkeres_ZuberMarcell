import { IsString, Length, Min, IsNumber } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class GyumolcsData {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(1,15)
    @IsString()
    nev: string;

    @Column()
    @Min(0)
    @IsNumber()
    darab:  number;
}