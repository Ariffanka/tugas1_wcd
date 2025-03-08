"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inputOutput_1 = require("./inputOutput");
class InitialExample {
    constructor(fullName) {
        this.fullName = fullName;
    }
    getInitials() {
        const names = this.fullName.split(' ');
        let initials = '';
        for (const name of names) {
            if (name.length > 0 && name[0] === name[0].toUpperCase()) {
                initials += name[0];
            }
            else {
                return 'Nama tidak valid. Setiap awal nama harus huruf kapital.';
            }
        }
        return initials;
    }
}
class NameInitials {
    constructor(fullName) {
        this.fullName = fullName;
    }
    getInitials() {
        const names = this.fullName.split(' ');
        let initials = '';
        for (const name of names) {
            if (name.length > 0 && name[0] === name[0].toUpperCase()) {
                initials += name[0];
            }
            else {
                return 'Nama tidak valid. Setiap awal nama harus huruf kapital.';
            }
        }
        return initials;
    }
}
const exampleName = 'Jhon Doe';
const initialExample = new InitialExample(exampleName);
console.log("  ====== Welcome to myGetNameInitials ====== ");
console.log("this is the example how to use myGetNameInitials");
console.log(`full name: ${exampleName} (input full name that you needed, as example Jhon Doe)`);
console.log(`initials: ${initialExample.getInitials()} and this is the result`);
console.log();
inputOutput_1.readline.question('input full name: ', (fullNameInput) => {
    const nameInitials = new NameInitials(fullNameInput);
    const initials = nameInitials.getInitials();
    if (typeof initials === 'string' && initials.startsWith('Nama tidak valid')) {
        console.log(initials);
        inputOutput_1.readline.close();
        return;
    }
    console.log('initials:', initials);
    inputOutput_1.readline.close();
});
