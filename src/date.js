"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inputOutput_1 = require("./inputOutput");
class DateDifferenceExample {
    constructor(date1, date2) {
        this.date1 = date1;
        this.date2 = date2;
    }
    getDifferenceInDays() {
        const timeDiff = Math.abs(this.date2.getTime() - this.date1.getTime());
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
    }
}
class DateDifference {
    constructor(date1, date2) {
        this.date1 = date1;
        this.date2 = date2;
    }
    getDifferenceInDays() {
        const timeDiff = Math.abs(this.date2.getTime() - this.date1.getTime());
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
    }
}
const exampleDate1 = new Date('2024-03-19');
const exampleDate2 = new Date('2024-03-21');
const dateDifferenceExample = new DateDifferenceExample(exampleDate1, exampleDate2);
console.log("  ====== Welcome to myGetDateDifference ====== ");
console.log("this is the example how to use myGetDateDifference");
console.log(`date1: ${exampleDate1.toISOString().split('T')[0]} (input date1 that you needed, as example 2023-10-20)`);
console.log(`date2: ${exampleDate2.toISOString().split('T')[0]} (input date2 that you needed, as example 2023-10-30)`);
console.log(`difference in days: ${dateDifferenceExample.getDifferenceInDays()} and this is the result`);
console.log();
inputOutput_1.readline.question('input date1 (YYYY-MM-DD): ', (date1Input) => {
    inputOutput_1.readline.question('input date2 (YYYY-MM-DD): ', (date2Input) => {
        const date1 = new Date(date1Input);
        const date2 = new Date(date2Input);
        if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
            console.log('Input tidak valid. Harap masukkan format tanggal YYYY-MM-DD.');
            inputOutput_1.readline.close();
            return;
        }
        const dateDifference = new DateDifference(date1, date2);
        console.log('difference in days:', dateDifference.getDifferenceInDays());
        inputOutput_1.readline.close();
    });
});
