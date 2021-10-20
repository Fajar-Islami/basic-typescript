class List<T> {
  private data: T[];

  // Diambil elemen dari array yang tipenya adalah generic array

  constructor(elements: T[]) {
    this.data = elements;
  }

  add(element: T): void {
    this.data.push(element);
  }

  addMultiple(...elements: T[]) {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data;
  }
}

let numbers = new List<number>([1, 2, 3]); // karena ditangkap dengan rest parameter
numbers.add(4);
numbers.addMultiple(1, 2, 34, 1);
// console.log(numbers.getAll());

let random = new List<number | string>([1, 2, "Fajar"]);
random.add("Islami");
random.add(12);
console.log(random.getAll());
