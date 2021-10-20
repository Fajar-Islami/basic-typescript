export class User {
  //   name: string;
  //   constructor(name: string) {
  //     this.name = name;
  //   }
  //   public name: string;

  constructor(public name: string, public umur: number) {
    this.name = name;
    this.umur = umur;
  }
}

let user = new User("Ahmad Fajar", 17);
// console.log(user.name);

/*  **note
    public = bisa di akses disemua kelas / dari luas kelas
    protected = hanya bisa diakses dari class tersebut dan kelas turunannya
    private = hanya bisa diakses di akses class itu sendiri
*/

// Inheritance
class Admin extends User {
  // property
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = "";
  static getRoleName: string = "Admin"; // static method sudah nempel dari kelasnya

  constructor(name: string, age: number, phone: string) {
    super(name, age);
    this.phone = phone;
  }

  // Static method ==>  static method sudah nempel dari kelasnya
  static getNameRole() {
    return "Hei";
  }

  //   Method
  getRole(): {
    read: boolean;
    write: boolean;
  } {
    return { read: this.read, write: this.write };
  }

  // Set tidak digunakan untuk return, sehingga tidak perlu return
  set email(value: string) {
    if (value.length < 5) {
      this._email = "email salah";
    } else {
      this._email = value;
    }
  }

  // Get untuk mendapatkan data email
  get email(): string {
    return this._email;
  }
}

let admin = new Admin("Ahmad", 27, "0812"); // karena mewarisi user, maka diisi sesuai params di user
// console.log(admin);
// console.log(admin.getRole());

admin.email = "fajar@mail.com";
console.log(admin.email);

// admin._email // error karena private

let admin2 = Admin.getRoleName; // static method sudah nempel dari kelasnya
console.log(admin2);
console.log(Admin.getNameRole());
