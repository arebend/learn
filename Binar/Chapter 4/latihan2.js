class Human {
  constructor(props) {
  // console.log('human props =>',props);
    if (this.constructor === Human) {
      throw new Error("Cannot instantiate from Abstract Class")
      // Because it's abstract
    }
    let {
      name,
      address
    } = props;
    this.name = name; // Every human has name
    this.address = address; // Every human has address
    this.profession = this.constructor.name;
    // Every human has profession, and let the child class to define it.
  }
  // Yes, every human can work
  work() {
    console.log("Working...")
  }
  // Every human can introduce
  introduce() {
    console.log(`Hello, my name is ${name}`)
  }
}

class Police extends Human {
  constructor(props) {
    super(props);
    this.rank = props.rank; // Add new property, rank.
  }
  work() {
    console.log("Go to the police station");
    super.work();
  }
}
// const Wiranto = new Police({
//   name: "Wiranto",
//   address: "Unknown",
//   rank: "General"
// })
// console.log(Wiranto);
// console.log(Wiranto.profession); // Police


// try {
//   let Abstract = new Human({
//     name: "Abstract",
//     address: "Unknown"
//   })
// } catch (err) {
//   console.log(err.message)
//   // Cannot instantiate from Abstract Class
// }