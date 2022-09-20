const Intern = require('../lib/Intern.js')

test('get interns school name', () => {
    const intern = new Intern('NCSU')

    expect(intern.school).toBe('NCSU')
})

test('getSchool() returns school name', () => {
    const intern = new Intern('NCSU')

    expect(intern.getSchool()).toBe('NCSU')
})