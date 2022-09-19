const Employee = require('../lib/Employee.js')

test('create employee object', () => {
    const employee = new Employee("Joe", "1", "testemail@email")

    expect(employee.name).toEqual(expect.any(string))
    expect(employee.id).toEqual(expect.any(string))
    expect(employee.email).toEqual(expect.any(string))
    
})