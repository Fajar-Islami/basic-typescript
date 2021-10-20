import ILaptop from "./ILaptop";
import * as Keyboard from "./Keyboard"; // import semua yang di export di keyboard.ts

abstract class BaseLaptop<T> implements ILaptop<T> {
  name: string;
  type: T;
  withNumeric: boolean;
  withTouchButton: boolean;

  constructor(
    name: string,
    type: T,
    withNumeric: boolean,
    withTouchButton: boolean
  ) {
    this.name = name;
    this.type = type;
    this.withNumeric = withNumeric;
    this.withTouchButton = withTouchButton;
  }

  a(): void {
    console.log(this.name, " press ", Keyboard.a());
  }

  b(): void {
    console.log(this.name, "press", Keyboard.b());
  }
}

export default BaseLaptop;
