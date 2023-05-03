const inquirer = require('inquirer')
const fs = require('fs')
const {Circle, Square, Triangle} = require('./lib/shape.js')

class SVG {
    constructor() {
        this.shape = ''
        this.text = ''
    }
    // render function for creating the SVG file down the line
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        ${this.shape}
        ${this.text}
        </svg>`
    }
    // setText function for setting the text in the SVG
    setText(text,textColor){
        this.text = `<text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
    // setShape function to render the shape
    setShape(shape) {
        this.shape = shape.render()
    }
}

// Prompt to ask users
inquirer.prompt([
    {
        type: 'checkbox',
        message: 'What shape would you like?',
        choices: ['Square', 'Circle', 'Triangle'],
        name: 'shapeEl',
    },
    {
        type: 'input',
        message: 'What color would you like your shape?',
        name: 'shapeColor',
    },
    {
        type: 'input',
        message: 'Enter three (3) characters.',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color do you like?',
        name: 'textColor'
    }
])
// Taking responses from above to create our SVG
.then(({text, textColor, shapeEl, shapeColor}) => {
    // const didn't work. This allows us to set the shape and shape color for the SVG
    let shape;
    switch (shapeEl) {
        case 'Square':
            shape = new Square();
            shape.setColor(shapeColor);
            break;
        case 'Circle':
            shape = new Circle();
            shape.setColor(shapeColor);
            break;
        default:
            shape = new Triangle();
            shape.setColor(shapeColor)
    }
    // Create an SVG
    const svg = new SVG()
    // Take the input from the prompts to set
    svg.setText(text, textColor)
    svg.setShape(shape)
    // Should create the SVG file
    return fs.writeFileSync('logo.svg', svg.render())
})
// If SVG was a success
.then(() => console.log("SVG created"))
// Error catcher
.catch((err) => {
    console.error(err)
    console.log("Oops lol")
})