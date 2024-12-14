import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post
} from '@nestjs/common'
import { VersionService } from './version.service'
import { Version } from './version.model'
import { PublicKeyService } from 'src/public_key/public_key.service'

@Controller('version')
export class VersionController {
  constructor(
    private readonly versionService: VersionService,
    private readonly publicKeyService: PublicKeyService
  ) {}
  @Get(':appname')
  // async getVersion(@Query('appname') appname: string) {
  async getVersion(@Param('appname') appname: string) {
    if (!appname) return 'appname is required'
    const info: Version = await this.versionService.getVersion(appname)
    return info
  }
  @Post(':appname')
  // async setVersion(@Body() body: Version, @Body('key') key: string) {
  async setVersion(
    @Body('appname') appname: string,
    @Body('version') version: string,
    @Body('key') key: string
  ) {
    try {
      await this.publicKeyService.verifyKey(key)
      await this.versionService.setVersion({
        version,
        appname
      } as Version)

      return {
        message: 'update success, current Version: ' + version,
        version
      }
    } catch (_error) {
      throw new HttpException('BadRequest', HttpStatus.BAD_REQUEST)
    }
  }
}
