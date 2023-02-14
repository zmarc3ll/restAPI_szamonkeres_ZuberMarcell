import { IsInt, IsString, Length, Min } from "class-validator";
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
    @IsInt()
    darab:  number;
}