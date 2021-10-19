export class User {
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
