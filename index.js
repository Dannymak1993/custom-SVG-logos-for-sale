const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require('./lib/shapes')

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter your text:',
            name: 'text',
            validate: (text) => text.length < 4 || "logo must not contain more then 3 letters"
        },
        {
            type: 'input',
            message: 'Enter a text color (in hexadecimal format):',
            name: 'textColor',
            validate: (color) => /^#([0-9A-F]{3}){1,2}$/i.test(color) || 'Invalid color format. Please enter a valid hexadecimal color code.'
        },
        {
            type: 'list',
            message: 'Select a shape:',
            name: 'shape',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            message: 'Enter a shape color (in hexadecimal format):',
            name: 'shapeColor',
            validate: (color) => /^#([0-9A-F]{3}){1,2}$/i.test(color) || 'Invalid color format. Please enter a valid hexadecimal color code.'
        },
    
    ])

        .then((response) => {
            let shape
            if (response.shape === "triangle") {
                shape = new Triangle();
            }
            else if (response.shape === "circle") {
                shape = new Circle();
            }
            else if (response.shape === "square") {
                shape = new Square();
            }
            shape.setColor(response.shapeColor);
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${shape.render()}

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
</svg>`

        })
        .then((svg) => {
            fs.writeFile('./examples/logo.svg', svg, (err) =>
                err ? console.log(err) : console.log('Success! Your logo.svg has been created.')
            );
        })
};

promptUser();