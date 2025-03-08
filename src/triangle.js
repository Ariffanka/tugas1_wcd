"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inputOutput_1 = require("./inputOutput");
class TriangleExample {
    constructor(angle1, angle2) {
        this.angle1 = angle1;
        this.angle2 = angle2;
    }
    getThirdAngle() {
        return 180 - this.angle1 - this.angle2;
    }
}
class Triangle {
    constructor(angle1, angle2) {
        this.angle1 = angle1;
        this.angle2 = angle2;
    }
    getThirdAngle() {
        return 180 - this.angle1 - this.angle2;
    }
}
const triangleExample = new TriangleExample(80, 65);
console.log("  ====== Welcome to myGetThirdAngle ====== ");
console.log("this is the example how to use myGetThirdAngle");
console.log(`input angle1: ${triangleExample.angle1} (input angle1 that you needed, as example 60)`);
console.log(`input angle2: ${triangleExample.angle2} (input angle2 that you needed, as example 70)`);
console.log(`third angle: ${triangleExample.getThirdAngle()} and this is the result`);
console.log();
inputOutput_1.readline.question('input angle1: ', (angle1Input) => {
    inputOutput_1.readline.question('input angle2: ', (angle2Input) => {
        const angle1 = parseFloat(angle1Input);
        const angle2 = parseFloat(angle2Input);
        if (isNaN(angle1) || isNaN(angle2)) {
            console.log('Input tidak valid. Harap masukkan angka.');
            inputOutput_1.readline.close();
            return;
        }
        if (angle1 <= 0 || angle2 <= 0 || angle1 + angle2 >= 180) {
            console.log('Input tidak valid. Jumlah sudut harus lebih dari 0 dan kurang dari 180.');
            inputOutput_1.readline.close();
            return;
        }
        const triangle = new Triangle(angle1, angle2);
        console.log('third angle:', triangle.getThirdAngle());
        inputOutput_1.readline.close();
    });
});
