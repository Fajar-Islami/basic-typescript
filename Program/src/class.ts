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
console.log(user.name);

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

  constructor(name: string, age: number, phone: string) {
    super(name, age);
    this.phone = phone;
  }

  //   Method
  getRole(): {
    read: boolean;
    write: boolean;
  } {
    return { read: this.read, write: this.write };
  }
}

let admin = new Admin("Ahmad", 27, "0812"); // karena mewarisi user, maka diisi sesuai params di user
console.log(admin);
console.log(admin.getRole());
