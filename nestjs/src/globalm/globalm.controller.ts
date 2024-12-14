import { Body, Controller, Get, Post } from '@nestjs/common'
import { GlobalmService } from './globalm.service'

@Controller('globalm')
export class GlobalmController {
  constructor(private readonly service: GlobalmService) { }
  @Post()
  create(@Body() data: number) {
    this.service.setValue(data)
  }

  @Get()
  getValue() {
    return this.service.getValue()
  }
}
