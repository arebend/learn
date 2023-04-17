// PROMISE
let name = "Binar";
const promise  = new Promise((resolve, reject) => {
  if (name) {
    resolve("Hello " + name)
  } else {
    reject("nama kosong")
  }
});

console.log(promise);
promise.then(data => console.log(data)).catch(err => console.log(err));


// Thread
// Single Threaded

// ASYNC - AWAIT
let name2 = "Binar";
const promise2 = () => new Promise((resolve, reject) => {
  if (name2) {
    resolve("Hello " + name2)
  } else {
    reject("nama kosong")
  }
});

const hello = async () => {
  try {
    const message = await promise2();
    console.log(message);
  } catch (error) {
   console.log(error); 
  }
};

hello();

/**
 *  Stack : First In Last out 
 * 
 *  Buku 3
 *  Buku 2 
 *  Buku 1
 * ===============  ibarakan Meja
 * yang diambul duluan diambil dari yang paling atas
 * 
 * 
 * 
 *  Queue : First In First Out
 * 
 *  Beli barang atau Beli tiket nonton
 * 
 */