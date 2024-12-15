import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DemoModule } from './demo/demo.module'
import { AnotherModule } from './another/another.module'
import { GlobalmModule } from './globalm/globalm.module'
import { SequelizeModule } from '@nestjs/sequelize'
import { UsersModule } from './users/users.module'
import { User } from './users/user.model'
import { PublicKeyModule } from './public_key/public_key.module'
import { VersionModule } from './version/version.module'
import { Version } from './version/version.model'
import { PublicKey } from './public_key/public_key.model'

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: '', // 配置
      password: '', // 配置
      database: '', // 配置
      models: [User, Version, PublicKey],

      // autoLoadModels: true,
      synchronize: true, // cause [Nest] 45088  - 2024/12/15 03:27:28   ERROR [SequelizeModule] Unable to connect to the database. Retrying (1)...

      define: {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false
      }
    }),

    DemoModule,
    AnotherModule,
    GlobalmModule,

    UsersModule,

    PublicKeyModule,

    VersionModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
