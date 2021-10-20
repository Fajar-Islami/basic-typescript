"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    //   name: string;
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
// console.log(user.name);
/*  **note
    public = bisa di akses disemua kelas / dari luas kelas
    protected = hanya bisa diakses dari class tersebut dan kelas turunannya
    private = hanya bisa diakses di akses class itu sendiri
*/
// Inheritance
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, age, phone) {
        var _this = _super.call(this, name, age) || this;
        // property
        _this.read = true;
        _this.write = true;
        _this._email = "";
        _this.phone = phone;
        return _this;
    }
    //   Method
    Admin.prototype.getRole = function () {
        return { read: this.read, write: this.write };
    };
    Object.defineProperty(Admin.prototype, "email", {
        // Get
        get: function () {
            return this._email;
        },
        // Set tidak digunakan untuk return, sehingga tidak perlu return
        set: function (value) {
            if (value.length < 5) {
                this._email = "email salah";
            }
            else {
                this._email = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Admin;
}(User));
var admin = new Admin("Ahmad", 27, "0812"); // karena mewarisi user, maka diisi sesuai params di user
// console.log(admin);
// console.log(admin.getRole());
admin.email = "fajar@mail.com";
console.log(admin.email);
// admin._email // error karena private
