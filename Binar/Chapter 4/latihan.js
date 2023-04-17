class Animal {
  constructor(props) {
    const {name, sound, color, habitat,food} = props
    this.name = name;
    this.sound = sound;
    this.color = color;
    this.habitat = habitat;
    this.food = food;
    
    if (this.constructor === Animal) {
      throw new Error("Cannot instantiate from Abstract Class")
      // Because it's abstract
    }
    // this.skill = this.constructor.name;
  }

  // contoh menggunakan log
  eat() {
    return `Eat: Dog eat ${this.food}`
    // console.log(`Eat: Dog eat ${this.food}`);
  }

  // contoh menggunakan return
  speak() {
    return `Speak: Dog sound is ${this.sound}`
    // console.log(`Dog sound is ${this.sound}`)
  }

}

// let blackDog = new Animal("Dalmation", "Guk.. Guk..", "Black & White", "Home", "Bone");
// console.log(blackDog);

// blackDog.eat();
// console.log(blackDog.speak());






const Herbivore = (Base) => 
  class extends Base {
    static food = 'plant'
    constructor(props) {
      super({...props, food : 'plant'})
    }

  }


const Carnivore = (Base) => 
  class extends Base {
    static food = 'meat'
    constructor(props) {
      super({...props, food : 'meat'})
    }
    attack() {
      return `I attack`;
    }
  }





class WaterAnimal extends Animal {
  #swimDepth
  constructor(props) {
    super({...props, habitat : 'water'})

    if (this.constructor === WaterAnimal) {
      throw new Error("Cannot instantiate from Abstract Class")
      // Because it's abstract
    }
    this.#swimDepth = props.swimDepth
  }

  swim() {
    return `I can swim in the depth of ${this.#swimDepth}m`
  }
}

// let ikan = new WaterAnimal('Ikan', 'blup blup blup', 'merah', 'pelet', 100)
// console.log(ikan.#swimDepth);
// console.log(ikan);
// console.log(ikan.swim());
// console.log(`\n ============================================ \n`);




class LandAnimal extends Animal {
  #speed
  constructor(props) {
    super({...props, habitat : 'land'})

    if (this.constructor === LandAnimal) {
      throw new Error("Cannot instantiate from Abstract Class")
      // Because it's abstract
    }
    this.#speed = props.speed
  }

  run() {
    return `I can run speed ${this.#speed}km/m`
  }
}

// let ceetah = new LandAnimal('ceetah', 'rawrr', 'orange', 'meat', 100)
// console.log(ceetah.#speed);
// console.log(ceetah);
// console.log(ceetah.run())
// console.log(`\n ============================================ \n`);





class AirAnimal extends Animal {
  #howToFly
  constructor(props) {
    super({...props, habitat : 'air'})

    if (this.constructor === AirAnimal) {
      throw new Error("Cannot instantiate from Abstract Class")
      // Because it's abstract
    }
  }

  flying() {
    return `I can fly so high`
  }

  howToFly() {
    return `TOP SECRET, DON'T TELL ANYONE`
  }

}

// let bird = new AirAnimal('eagle', 'eaaaaaakk...','white', 'meat', 100)
// console.log(bird.#howToFly);
// console.log(bird);
// console.log(bird.flying())
// console.log(bird.howToFly())



// console.log(`\n ============================================ \n`);



/** ABSTACTION */


class Lion extends Carnivore (LandAnimal) {
  constructor(props){
    // console.log('ini props', props);
    super(props)
  }
  anotherSound() {
    return `Roooooar.............!!`
  }
}

const bigLion = new Lion ({
  name: 'Simba',
  sound: 'Roaar!!',
  color: 'Brown',
  habitat: 'savana',
  food: 'meats'
})

// console.log(bigLion);
// console.log(bigLion.anotherSound());


try {
  let abstract = new LandAnimal({
    name : "abstract",
    sound : 'meawww..!'
  })
} catch (error) {
  // console.log(error.message);
}






class Shark extends  Carnivore (WaterAnimal) {
  constructor(props){
    super(props)
  }
  anotherSpeed() {
    return `I can swim 2.4 kph!!`
  }
}

const bigShark = new Shark ({
  name: 'Jaws',
  sound: 'blurrrp... !!',
  color: 'Blue',
  habitat: 'Sea',
  food: 'meats and fish',
})

// console.log(bigShark);
// console.log(bigShark.anotherSpeed());

try {
  let abstract = new WaterAnimal({
    name : "abstract",
    sound : 'bluuurp.. bluuurrp!'
  })
} catch (error) {
  // console.log(error.message);
}




class Eagle extends Carnivore (AirAnimal) {
  constructor(props){
    super(props)
  }
  anotherSpeed() {
    return `I can fly 320 km/h!!`
  }
}

const bigEagle = new Eagle ({
  name: 'Falcom',
  sound: 'eaakk... !!',
  color: 'Brown',
  habitat: 'along rivers',
  food: 'another bird and fish'
})

// console.log(bigEagle);
// console.log(bigEagle.anotherSpeed());

try {
  let abstract = new AirAnimal({
    name : "abstract",
    sound : 'bluuurp.. bluuurrp!'
  })
} catch (error) {
  // console.log(error.message);
}







let bird = new Eagle({
  name: "Falcon",
  sound: "awwwwkk....!",
  color: "Black",
})

let shark = new Shark({
  name: "Jaws",
  sound: "ssstt....",
  color: "Blue",
})

let lion = new Lion({
  name: "Simba",
  sound: "Rawrr....!",
  color: "Brown",
})

console.log(bird);
console.log(shark);
console.log(lion);



















console.log('\n');



// 1. function delaration / deklarasi
function makan() {
  let makananBerat = {}
  makananBerat.nasi = 'Nasi Goreng',
    makananBerat.roti = 'Roti Goreng';
  return makananBerat
}
// console.log('function delaration', makan())


// 2. function expression / ekspresi
let minuman = function () {
  let minumanManis = {}
  minumanManis.buah = 'Es buah',
    minumanManis.blended = 'Frappucino',
    minumanManis.kemasan = 'Good Day'
  return minumanManis
}
// console.log('function expression', minuman())


// 3. function constructor
function minuman2() {
  let minumanManis = {}
  minumanManis.buah = 'Es buah',
    minumanManis.blended = 'Frappucino',
    minumanManis.kemasan = 'Good Day'
  return minumanManis
}
// console.log('function constructor', new minuman2());




