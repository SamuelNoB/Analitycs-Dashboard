import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/analytics')
  getAnalytics(@Query('days') days?: number, @Query('links') links?: number) {
    return this.appService.getAnalytics(days, links);
  }
}
