// Dalam TS, baris berikut bisa dibaca type
// Penentuan variabel dalam object

type User = {
  name: string;
  age: number;
};

let user: User = {
  name: "Fajar",
  age: 17,
};

user = {
  name: "Ahmad",
  age: 18,
};
