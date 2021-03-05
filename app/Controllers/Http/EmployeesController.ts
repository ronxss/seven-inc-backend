import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Employee from 'App/Models/Employee'

export default class EmployeesController {
  public async index ({}: HttpContextContract) {
      return Employee.all()
  }

  public async store ({request}: HttpContextContract) {
      const data = request.post()
      console.log(request.post())
      return Employee.create(data)
  }

  public async show ({params}: HttpContextContract) {
      return Employee.findOrFail(params.id)
  }

  public async update ({params, request}: HttpContextContract) {
      const data = request.all()
      const employee = await Employee.findOrFail(params.id)
      await employee.merge(data)
      return employee.save()
  }

  public async destroy ({params}: HttpContextContract) {
    const employeeId = params.id
    const employee = await Employee.findOrFail(employeeId)
    return employee.delete()
  }
}
