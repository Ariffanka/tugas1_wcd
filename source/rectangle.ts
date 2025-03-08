import { readline } from "./inputOutput";

class RectangleExample{

    width: number;
    length: number;

    constructor(width:number, length:number){
        this.width =  width;
        this.length = length; 
    }

    getArea(): number{
        return this.length * this.width;
    }

}

class Rectangle{

    width: number;
    length: number;

    constructor(width:number, length:number){
        this.width =  width;
        this.length = length; 
    }

    getArea(): number{
        return this.length * this.width;
    }    

}


const rectangleExample = new RectangleExample(5,3);
console.log("  ====== Welcome to myGetAreaRectangle ====== ");
console.log("this is the example how to use myGetAreaRectangle");
console.log(`input width: ${rectangleExample.width} (input width that you needed, as example 5)`);
console.log(`input length: ${rectangleExample.length} (input length that you needed, as example 3)`);
console.log(`${rectangleExample.getArea()} and this is the result`);
console.log();

readline.question('input width: ', (widthInput: string) => {
    readline.question('input length: ', (lengthInput: string) => {
      const width = parseFloat(widthInput);
      const length = parseFloat(lengthInput);
  
      if ((isNaN(width) || isNaN(length))) {
        console.log('Input tidak valid. Harap masukkan angka.');
        readline.close();
        return;
      }

      if (width <= 0 || length <= 0) {
        console.log('Input tidak valid. Harap masukkan angka lebih dari 0.');
        readline.close();
        return;
      }
  
      const rectangle = new Rectangle(width, length);
      console.log('rectangle area:', rectangle.getArea());
  
      readline.close();
    });
  });
