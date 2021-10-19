// 1. enum => berisi sekumpulan data konstan, seperti .env
// env penyimpanan data di level konfigurasi, kalau enum menyimpan data konstan di level aplikasi

// Numeric enum
// enum Month {
//   JAN = 1, // maka index dimulai 1
//   FEB = 100, // maka index selanjutnya dimulai dari 101
//   MAR,
//   APR,
//   MAY,
// }

// console.log(Month);

// String Enum
enum Month2 {
  JAN = "Januari",
  FEB = "Februari",
  MAR = "Maret",
  APR = "April",
  MAY = "May",
  //   JUN  ==> baris ini error, karena type data di enum harus sama
}

console.log(Month2);
console.log(Month2.FEB);
