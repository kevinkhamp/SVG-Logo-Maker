const inquirer = require('inquirer')
const fs = require('fs')
const {Circle, Square, Triangle} = require('./lib/shape.js')

class SVG {
    constructor() {
        this.shapeElement = ''
        this.textElement = ''
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"/>`
    }
    setText(text,color){
        return `<text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape) {
        this.shapeElement = shape.render()
    }
}

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
.then((response) =>
fs.writeFile())