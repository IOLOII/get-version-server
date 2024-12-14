import { Module } from '@nestjs/common'
import { AnotherController } from './another.controller'
import { AnotherService } from './another.service'
import { DemoModule } from 'src/demo/demo.module'

@Module({
  controllers: [AnotherController],
  providers: [AnotherService],
  imports: [DemoModule],
})
export class AnotherModule {}
