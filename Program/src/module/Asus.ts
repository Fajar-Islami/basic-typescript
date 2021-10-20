import BaseLaptop from "./BaseLaptop";

class Asus<T> extends BaseLaptop<T> {
  constructor(type: T, numeric: boolean, toucButton: boolean) {
    super("Asus", type, numeric, toucButton);
  }
}

export default Asus;
