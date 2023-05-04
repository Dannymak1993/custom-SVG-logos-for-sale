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
            type: 'list',
            message: 'Select a text color:',
            name: 'textColor',
            choices: ['red', 'blue', 'green'],
        },
        {
            type: 'list',
            message: 'Select a shape:',
            name: 'shape',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'list',
            message: 'Select a shape color:',
            name: 'shapeColor',
            choices: ['yellow', 'orange', 'purple'],
        },
    ])

        .then((response) => {
            let shape
            if (response.shape = "triangle") {
                shape = new Triangle();
            }
            if (response.shape = "circle") {
                shape = new Circle();
            }
            if (response.shape = "square") {
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