class mobilToyota {
  constructor(merk, tipe, ac, color, version) {
      this.merk = merk,
      this.tipe = tipe,
      this.ac = ac,
      this.color = color,
      this.version = version
  }

  tipeMobile() {
    console.log("Ini mobil " + this.merk);
  }
}

let avanza = new mobilToyota("Avanza", "SUV", 1500, "Pink", "Doyok")
let inova = new mobilToyota("Inova", "Reborn", 2000, "Pink", "Reborn")
let hiace = new mobilToyota("Hiace", "Lux", 2000, "Pink", "Lux")

console.log("INI CLASS AVANZA ==>", avanza);
// console.log("INOVA ==>", inova);
// console.log("HIACE ==>", hiace);


// avanza.tipeMobile()

let inovaReborn = {
  "merk" : "Inova",
  "tipe" : "Reborn",
  "cc" : 2000,
  "colour" : "black",
  "version" : "Reborn"
}

console.log("INI OBJECT INOVA ==>", inovaReborn);