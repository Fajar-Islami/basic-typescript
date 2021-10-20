// Generic ==> tipe data yang dinamis

function getData(value: any) {
  return value;
}

console.log(getData("Ahmad").length);
console.log(getData(123).length);

/* 
Contoh generic dengan <T>
Tipe data diatur berdasarkan argumen yang dikirim
*/
function myData<T>(value: T) {
  return value;
}

console.log(myData("Ahmad").length);
console.log(myData(123));

const arrowFunc = <T>(value: T) => {
  return value;
};

console.log(arrowFunc("Arrow func"));
