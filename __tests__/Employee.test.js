const Employee = require('../lib/Employee.js')

test('create employee object', () => {
    const employee = new Employee("Joe", "1", "testemail@email")

    expect(employee.name).toBe('Joe')
    expect(employee.id).toBe('1')
    expect(employee.email).toBe('testemail@email')
})

test('gets name of employee', () => {
    const employee = new Employee("Joe", "1", "testemail@email")

    expect(employee.getName()).toBe('Joe')
})

test('gets id of employee', () => {
    const employee = new Employee("Joe", "1", "testemail@email")

    expect(employee.getId()).toBe('1')
})

test('gets email of employee', () => {
    const employee = new Employee("Joe", "1", "testemail@email")

    expect(employee.getEmail()).toBe('testemail@email')
})