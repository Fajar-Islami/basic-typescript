import BaseLaptop from "./BaseLaptop";

class MacBook<T> extends BaseLaptop<T> {
  constructor(type: T, numeric: boolean, toucButton: boolean) {
    super("MacBook", type, numeric, toucButton);
  }
}

export default MacBook;
