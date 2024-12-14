import { Module } from '@nestjs/common'
import { DemoController } from './demo.controller'
import { DemoService } from './demo.service'

@Module({
  controllers: [DemoController],
  providers: [DemoService],
  exports: [DemoService], // 导出 DemoService 给其他模块使用
})
export class DemoModule {}
