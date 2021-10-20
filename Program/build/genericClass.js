"use strict";
var List = /** @class */ (function () {
    // Diambil elemen dari array yang tipenya adalah generic array
    function List(elements) {
        this.data = elements;
    }
    List.prototype.add = function (element) {
        this.data.push(element);
    };
    List.prototype.addMultiple = function () {
        var _a;
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, elements);
    };
    List.prototype.getAll = function () {
        return this.data;
    };
    return List;
}());
var numbers = new List([1, 2, 3]); // karena ditangkap dengan rest parameter
numbers.add(4);
numbers.addMultiple(1, 2, 34, 1);
// console.log(numbers.getAll());
var random = new List([1, 2, "Fajar"]);
random.add("Islami");
random.add(12);
console.log(random.getAll());
