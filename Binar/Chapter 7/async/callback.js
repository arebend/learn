const fs = require('fs');

const options = {
  encoding: "utf-8"
};

// fs.readFile("text.txt", options, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

/* ERROR */
// fs.readFile("text_text.txt", options, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

const processContent = (err, data) => {
  if (err) {
    console.log('error', err);
  } else {
    console.log(data);
  }
}

fs.readFile("text.txt", options, processContent);
const content = fs.readFileSync("text.txt", options);
console.log("Sync", content); // muncul duluan