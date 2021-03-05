import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Employees extends BaseSchema {
  protected tableName = 'employees'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.date('born_date')
      table.decimal('salary')
      table.string('position')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
