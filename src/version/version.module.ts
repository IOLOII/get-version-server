import { Module } from '@nestjs/common'
import { VersionController } from './version.controller'
import { VersionService } from './version.service'
import { PublicKeyModule } from 'src/public_key/public_key.module'
import { SequelizeModule } from '@nestjs/sequelize'
import { Version } from './version.model'

@Module({
  // imports: [PublicKeyModule],
  imports: [PublicKeyModule, SequelizeModule.forFeature([Version])],
  controllers: [VersionController],
  providers: [VersionService],
  exports: [VersionService]
})
export class VersionModule {}
