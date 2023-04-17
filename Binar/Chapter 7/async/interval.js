let a = 0

const iniInterval = setInterval(() => {
  console.log(`${++a} kali jalan`)
  if (a === 10) clearInterval(iniInterval)
}, 1000)

console.log('Apakah aku jalan duluan?')

const interval = setInterval(() => {
  console.log(`HALO`);
  setTimeout(() => clearInterval(interval), 1000)
}, 100)


let count = 0
const intervalCount = setInterval(() => {
  if (count < 10) {
    console.log(count);
    count++
  } else {
    clearInterval(intervalCount);
  }
}, 100);


// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }