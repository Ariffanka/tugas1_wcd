import { readline } from "./inputOutput";

class CircleExample {
    radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    getDiameter(): number {
      return 2 * this.radius;
    }
  
    getCircumference(): number {
      return 2 * Math.PI * this.radius;
    }
  
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  
  class Circle {
    radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    getDiameter(): number {
      return 2 * this.radius;
    }
  
    getCircumference(): number {
      return 2 * Math.PI * this.radius;
    }
  
    getArea(): number {
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
  
  readline.question('input radius: ', (radiusInput: string) => {
    const radius = parseFloat(radiusInput);
  
    if (isNaN(radius)) {
      console.log('Input tidak valid. Harap masukkan angka.');
      readline.close();
      return;
    }
  
    if (radius <= 0) {
      console.log('Input tidak valid. Harap masukkan angka lebih dari 0.');
      readline.close();
      return;
    }
  
    const circle = new Circle(radius);
    console.log('diameter:', circle.getDiameter());
    console.log('circumference:', circle.getCircumference());
    console.log('area:', circle.getArea());
  
    readline.close();
  });