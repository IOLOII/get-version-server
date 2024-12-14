import { Injectable } from '@nestjs/common'
import { Version } from './version.model'
import { InjectModel } from '@nestjs/sequelize'

@Injectable()
export class VersionService {
  constructor(
    @InjectModel(Version)
    private readonly versionModel: typeof Version
  ) {}
  async setVersion({ appname, version }: Version) {
    return this.versionModel.update(
      { version },
      {
        where: {
          appname
        }
      }
    )
  }
  async getVersion(appname: string): Promise<Version> {
    return this.versionModel.findOne({
      where: {
        appname
      },
      attributes: ['version', 'appname']
    })
  }
}
