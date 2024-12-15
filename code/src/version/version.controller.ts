import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put
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

  @Post('')
  async createVersion(
    @Body('appname') appname: string,
    @Body('version') version: string,
    @Body('username') username: string
  ) {
    try {
      await this.versionService.createVersion({
        appname,
        version,
        username
      } as Version)

      return {
        message: 'create success, ' + appname + ' ' + version,
        version,
        appname
      }
    } catch (_error) {
      throw new HttpException('BadRequest', HttpStatus.BAD_REQUEST)
    }
  }

  @Put(':appname')
  // async setVersion(@Body() body: Version, @Body('key') key: string) {
  async updateVersion(
    @Param('appname') appname: string,
    @Body('version') version: string,
    @Body('key') key: string
  ) {
    try {
      await this.publicKeyService.verifyKey(key)
      await this.versionService.updateVersion({
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
