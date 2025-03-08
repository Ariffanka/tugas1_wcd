"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inputOutput_1 = require("./inputOutput");
class CircleExample {
    constructor(radius) {
        this.radius = radius;
    }
    getDiameter() {
        return 2 * this.radius;
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getDiameter() {
        return 2 * this.radius;
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
const circleExample = new CircleExample(5);
console.log("  ====== Welcome to myGetCircleInfo ====== ");
console.log("this is the example how to use myGetCircleInfo");
console.log(`input radius: ${circleExample.radius} (input radius that you needed, as example 5)`);
console.log(`diameter: ${circleExample.getDiameter()}`);
console.log(`circumference: ${circleExample.getCircumference()}`);
console.log(`area: ${circleExample.getArea()}`);
console.log();
inputOutput_1.readline.question('input radius: ', (radiusInput) => {
    const radius = parseFloat(radiusInput);
    if (isNaN(radius)) {
        console.log('Input tidak valid. Harap masukkan angka.');
        inputOutput_1.readline.close();
        return;
    }
    if (radius <= 0) {
        console.log('Input tidak valid. Harap masukkan angka lebih dari 0.');
        inputOutput_1.readline.close();
        return;
    }
    const circle = new Circle(radius);
    console.log('diameter:', circle.getDiameter());
    console.log('circumference:', circle.getCircumference());
    console.log('area:', circle.getArea());
    inputOutput_1.readline.close();
});
