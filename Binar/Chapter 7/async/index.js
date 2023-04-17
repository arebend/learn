console.log(`Hello`);

let x = 0

setTimeout(() => {
  console.log(`World 1 => 1,1 seconds`)
  x = 10;
}, 1100); // 

console.log(`!!!`);
console.log(x); // race condition

setTimeout(() => {
  console.log(`World 2 =>  1 second`)
  console.log(x);
}, 1000);


setTimeout(() => {
  console.log(`World 3 =>  1,2 seconds`)
  console.log(x);
}, 1200);
