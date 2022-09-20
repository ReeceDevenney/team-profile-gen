const Engineer = require('../lib/Engineer.js')

test('get engineers github name', () => {
    const engineer = new Engineer('reecedevenney')

    expect(engineer.github).toBe('reecedevenney')
})

test('getGithub() returns github name', () => {
    const engineer = new Engineer('reecedevenney')

    expect(engineer.getGithub()).toBe('reecedevenney')
})