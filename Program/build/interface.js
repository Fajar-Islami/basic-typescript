"use strict";
var Asus = /** @class */ (function () {
    function Asus(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    Asus.prototype.on = function () {
        console.log("Nyala");
    };
    Asus.prototype.off = function () {
        console.log("Mati");
    };
    return Asus;
}());
var MacBook = /** @class */ (function () {
    function MacBook(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    MacBook.prototype.on = function () {
        console.log("Nyala");
    };
    MacBook.prototype.off = function () {
        console.log("Mati");
    };
    return MacBook;
}());
var asus = new Asus("Asus", true);
asus.on();
asus.off();
var mcb = new MacBook("MacBook", true);
mcb.on();
mcb.off();
