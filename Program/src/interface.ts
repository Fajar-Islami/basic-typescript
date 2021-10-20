/* 
interface == blueprint

Perbedaan interface dengan abtrasc
interface   ==> sebuah kontrak/ blueprint yang hanya menunjukan method/property apa saja yang harus ada didalam 
                sebuah class yang akan mengimplementasikan interface tersebut. Method yang dibuat hanya sekedar 
                "contract" dan tidak bisa menjalankan method tersebut
            
abstract    ==> Parent class, digunakan agar method/property tidak dibuat berulang. Method pada abstract dapat 
                langsung dibuat

*/
interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop {
  name: string;
  isGaming: boolean;

  constructor(name: string, isGaming: boolean) {
    this.name = name;
    this.isGaming = isGaming;
  }

  on(): void {
    console.log("Nyala");
  }
  off(): void {
    console.log("Mati");
  }
}

class MacBook implements Laptop {
  name: string;
  keyboardLight: boolean;

  constructor(name: string, keyboardLight: boolean) {
    this.name = name;
    this.keyboardLight = keyboardLight;
  }

  on(): void {
    console.log("Nyala");
  }
  off(): void {
    console.log("Mati");
  }
}

let asus = new Asus("Asus", true);
asus.on();
asus.off();

let mcb = new MacBook("MacBook", true);
mcb.on();
mcb.off();
