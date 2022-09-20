const Manager = require('../lib/Manager.js')

test ('get managers office number', ()=> {
    const manager = new Manager('500')

    expect(manager.officeNumber).toBe('500')
})