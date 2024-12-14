import { Column, Model, Table } from 'sequelize-typescript'

@Table
export class PublicKey extends Model {
  @Column
  key: string // hashkey 用户本地加密的key

  @Column
  username: string

  @Column
  appname: string
}
