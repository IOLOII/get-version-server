import { Controller, Get } from '@nestjs/common'
import { Cat, DemoService } from 'src/demo/demo.service'

@Controller('another')
export class AnotherController {
  constructor(private readonly demoService: DemoService) { } // 注意这里使用的使用 如果共用 module service 就不要在 module中 providers: [DemoService], 因为都在 imports: [DemoModule], 中包含了
  @Get()
  getHello(): Cat[] {
    return this.demoService.findAll()
  }
}
