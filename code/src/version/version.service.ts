import { Injectable } from '@nestjs/common'
import { Version } from './version.model'
import { InjectModel } from '@nestjs/sequelize'

@Injectable()
export class VersionService {
  constructor(
    @InjectModel(Version)
    private readonly versionModel: typeof Version
  ) {}
  async updateVersion({ appname, version }: Version) {
    return this.versionModel.update(
      { version },
      {
        where: {
          appname
        }
      }
    )
  }
  async createVersion({ appname, version, username }: Version) {
    return this.versionModel.create(
      { version, appname, username },
      {
        fields: ['version', 'appname', 'username']
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
