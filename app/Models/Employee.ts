import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Employee extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name:string

  @column.date()
  public bornDate: DateTime

  @column()
  public salary: number

  @column()
  public position:string
}
