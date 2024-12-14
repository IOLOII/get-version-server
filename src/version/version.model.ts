import { Column, Model, Table } from 'sequelize-typescript'

@Table
export class Version extends Model {
  @Column
  appname: string

  @Column
  version: string

  @Column
  username: string
}
