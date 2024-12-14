import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DemoModule } from './demo/demo.module'
import { AnotherModule } from './another/another.module'
import { GlobalmModule } from './globalm/globalm.module'

@Module({
  imports: [DemoModule, AnotherModule, GlobalmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
