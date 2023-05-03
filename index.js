const inquirer = require('inquirer')

inquirer.prompt([
    {
        type: 'checkbox',
        message: 'What shape would you like?',
        choices: ['Square', 'Circle', 'Triangle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'What color would you like your shape?',
        name: 'shape-color',
    },
    {
        type: 'input',
        message: 'Enter three (3) characters.',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color do you like?',
        name: 'text-color'
    }
])