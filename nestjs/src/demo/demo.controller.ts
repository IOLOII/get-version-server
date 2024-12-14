import { Controller, Get } from '@nestjs/common'

@Controller('demo')
export class DemoController {
  @Get()
  default(): string {
    return 'hello demo'
  }
  @Get('profile')
  demo(): string {
    return 'hello demo'
  }
}
