"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    //   constructor(name: string) {
    //     this.name = name;
    //   }
    //   public name: string;
    function User(name, umur) {
        this.name = name;
        this.umur = umur;
        this.name = name;
        this.umur = umur;
    }
    return User;
}());
exports.User = User;
var user = new User("Ahmad Fajar", 17);
console.log(user.name);
