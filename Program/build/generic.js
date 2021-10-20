"use strict";
// Generic ==> tipe data yang dinamis
function getData(value) {
    return value;
}
console.log(getData("Ahmad").length);
console.log(getData(123).length);
/*
Contoh generic dengan <T>
Tipe data diatur berdasarkan argumen yang dikirim
*/
function myData(value) {
    return value;
}
console.log(myData("Ahmad").length);
console.log(myData(123));
var arrowFunc = function (value) {
    return value;
};
console.log(arrowFunc("Arrow func"));
