function diskon(hargaSebelumDiskon) {
  return hargaSebelumDiskon * 30 / 100;
}

function sayHiTo(name) {
  return `Halo ${name.toUpperCase()}`;
}

const sayHiTo2 = function (name) {
  return `Halo ${name.toUpperCase()}`
}

const sayHiTo3 = (name) => `Halo ${name.toUpperCase()}`;

function tanpaReturn(value) {
  console.log(value);
}

tanpaReturn('zzz ini coba')


console.log(sayHiTo("Binar"));
console.log(sayHiTo2("Binar 2"));
console.log(sayHiTo3("Binar 3"));



class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.isLiving = true;
  }
}

const person1 = {
  "name" : "Siapa",
  "address" : "Jl. Xxxx",
  "isLiving" : true
}

const person2 = new Person("Siapa", "Jl. Xxx");
console.log(person2.name);
console.log(person2.address);
console.log(person2.isLiving);
