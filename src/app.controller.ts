import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import GyumolcsData from './GyumolcsData.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Get('GyumolcsData')
  async gyumolcsLista(){
    const gyumolcsRepo =this.dataSource.getRepository(GyumolcsData);
    return await gyumolcsRepo.find();
  }
}
