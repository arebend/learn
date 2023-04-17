const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* CARA 1 */
const result = numbers.filter(index =>
  index % 2 == 1
)
console.log(`CARA 1 =>`, result.reverse());
// [9, 7, 5, 4, 3, 1]



/* CARA 2 */
const odd = []
numbers.forEach((number => {
  if (number % 2 === 1) {
    odd.push(number);
  }
}));
console.log(`CARA 2 =>`, odd.reverse());
// [9, 7, 5, 4, 3, 1]



/* CARA 3 */
const temp = []
numbers.forEach((item => {
  if (item % 2 === 1) {
    temp.unshift(item);
  }
}));
console.log(`CARA 3 =>`, temp);
// [9, 7, 5, 4, 3, 1]



/* CARA 4 */
let reversedNumbers = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  reversedNumbers.push(numbers[i]);
}
console.log('reversedNumbers => ', reversedNumbers);
console.log(`CARA 4 =>`, reversedNumbers.filter(row =>
  row % 2 == 1
));