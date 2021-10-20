import Asus from "./Asus";
import MacBook from "./MacBook";

let asus = new Asus("Zenbook", true, true);
console.log(asus);

let macBook = new MacBook(2017, false, false);
macBook.a();
console.log(macBook);
