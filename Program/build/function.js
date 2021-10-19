"use strict";
// 1. Tipe data balikan function
// function getName(): string {
//   return "Hello, my name is fajar";
// }
// console.log(getName());
// function getAge(): number {
//   return 123;
// }
// function printName(): void {
//   console.log("Print name");
// }
// printName();
// 2. Function dengan Argument
// function multiply(val1: number, val2: number): number {
//   return val1 * val2;
// }
// const result = multiply(2, 20);
// console.log(result);
// 3. Function as type
// Biasanya ini ditetapkan tim
// type Tambah = (val1: number, val2: number) => number;
// Ini adalah function Add dengan type nya adalah Tambah
// const Add: Tambah = (val1: number, val2: number): number => {
//   return val1 + val2;
// };
// 4. Default Parameter
// const fullname = (first: string, last: string = "Fajar"): string => {
//   return first + " " + last;
// };
// console.log(fullname("Ahmad"));
// console.log(fullname("Ahmad", "Islami"));
// 5. Opitonal Parameter ==> menggunakan tanda tanya
// Kalau paramter kedua kosong, maka akan diset undefined
var getName = function (val1, val2) {
    return val1 + " " + val2;
};
console.log(getName("Ahmad"));
console.log(getName("Ahmad", "fajar"));
var add = function (val1, val2) {
    return val1 + val2; // error karena val 2 kemungkinan kosong (optional)
};
