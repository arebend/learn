/*

Di Javascript, ada dua aturan dalam penamaan
variabel:
1. Nama harus mengandung huruf, angka, atau
simbol “$” dan “_”.
2. Karakter pertama tidak boleh angka

Backward Compatibility (Compatible)

*/

var $ = "Hello World"
console.log($);


var harga = 1000;

var harga2;
harga2 = 2000;

console.log(harga);
console.log(harga2);

/*

Bisa dibilang, variabel var merupakan variabel yang
lawas. Tapi, penggunaannya masih dipertahankan
oleh banyak programmer untuk menjaga
kompatibilitas ke versi sebelumnya.
Dari amatan sekilas, kita bisa tahu bahwa variabel
var punya fungsi dan cara penggunaan yang simpel.
Tapi, kita perlu berhati-hati dalam menggunakan
variabel ini karena ia memiliki beberapa problem.

1. Scope
2. Reassigned dan Redeclared
3. Hoisting
*/

// 1. Scope
// var diskon = 500 // Global scope
// if (true){
// var diskon = 300 // Global scope
// }
// console.log(diskon)
// // Output: 300
// // karena var adalah global scope
// /* Sebelum ada ES6, solusinya membuat function
// scope -> local scope */
// var diskon = 500 // Global scope
// function diskonScope(){
// var diskon = 300 // Local scope
// console.log(diskon) // Output: 300
// }
// diskonScope()
// console.log(diskon) // Output: 500

// 2. Reassigned dan Redeclared
// var name; // Declaration
// console.log(name) // Output: undefined
// name ='Bot' // Assignment
// console.log(name) // Output: Bot
// var name ='Bot Sabrina' // Redeclared and Reassigned
// console.log(name) // Output: Bot Sabrina

// 3. Hoisting
// name = 'Mentor Sabrina' // Variabel di-assign duluan
// var name; // Kemudian baru dideklarasikan
// console.log(name) // Output: Mentor Sabrina
// /* Di belakang layar terjadi hoisting */
// var name;
// name = 'Mentor Sabrina'
// console.log(name) // Output: Mentor Sabrina



/* 

Tipe data number mewakili number integer (angka
bilangan bulat) dan floating number (angka bilangan
desimal).
Ada banyak operasi untuk number, contohnya
perkalian (*), pembagian (/), penjumlahan (+),
pengurangan (-), dan seterusnya.

*/