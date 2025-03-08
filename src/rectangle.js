"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inputOutput_1 = require("./inputOutput");
class RectangleExample {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    getArea() {
        return this.length * this.width;
    }
}
class Rectangle {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    getArea() {
        return this.length * this.width;
    }
}
const rectangleExample = new RectangleExample(80, 65);
console.log("  ====== Welcome to myGetAreaRectangle ====== ");
console.log("this is the example how to use myGetAreaRectangle");
console.log(`input width: ${rectangleExample.width} (input width that you needed, as example 5)`);
console.log(`input length: ${rectangleExample.length} (input length that you needed, as example 3)`);
console.log(`${rectangleExample.getArea()} and this is the result`);
console.log();
inputOutput_1.readline.question('input width: ', (widthInput) => {
    inputOutput_1.readline.question('input length: ', (lengthInput) => {
        const width = parseFloat(widthInput);
        const length = parseFloat(lengthInput);
        if ((isNaN(width) || isNaN(length))) {
            console.log('Input tidak valid. Harap masukkan angka.');
            inputOutput_1.readline.close();
            return;
        }
        if (width <= 0 || length <= 0) {
            console.log('Input tidak valid. Harap masukkan angka lebih dari 0.');
            inputOutput_1.readline.close();
            return;
        }
        const rectangle = new Rectangle(width, length);
        console.log('rectangle area:', rectangle.getArea());
        inputOutput_1.readline.close();
    });
});
