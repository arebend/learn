class Animal {
  constructor(props) {
    if (this.constructor === Animal) {
      throw new Error("Cannot instantiate from Abstract Class");
    }
    const { name, sound, color, habitat, food } = props;
    this.food = food;
    this.name = name;
    this.sound = sound;
    this.color = color;
    this.habitat = habitat;
  }

  introduce() {
    return `My name ${this.name}.\n${this.eat()}. ${this.speak()}. I live in ${this.habitat}`;
  }

  eat() {
    return `I eat ${this.food}`;
  }

  speak() {
    return `I'm ${this.sound}ing`;
  }
}

class WaterAnimal extends Animal {
  static habitat = "water";
  #swimDepth;

  constructor(props) {
    super({
      ...props,
      habitat: WaterAnimal.habitat,
    });

    if (this.constructor === WaterAnimal) {
      throw new Error("Cannot instantiate from Abstract Class");
    }

    this.#swimDepth = props.swimDepth;
  }

  swim() {
    return `I can swim in the depth of ${this.#swimDepth} m`;
  }
}

class LandAnimal extends Animal {
  static habitat = "land";
  #speed;

  constructor(props) {
    super({
      ...props,
      habitat: LandAnimal.habitat,
    });

    if (this.constructor === LandAnimal) {
      throw new Error("Cannot instantiate from Abstract Class");
    }

    this.#speed = props.speed;
  }

  run() {
    return `I can run ${this.#speed} km/h`;
  }
}

class AirAnimal extends Animal {
  static habitat = "air";

  constructor(props) {
    super({
      ...props,
      habitat: AirAnimal.habitat,
    });

    if (this.constructor === AirAnimal) {
      throw new Error("Cannot instantiate from Abstract Class");
    }
  }

  #howToFly() {
    return "TOP SECRET, DO NOT TELL ANYONE";
  }

  fly() {
    return "I can fly";
  }
}

const Carnivore = (Base) =>
  class extends Base {
    constructor(props) {
      super({
        ...props,
        food: "meat",
      });
    }
  };

class Lion extends Carnivore(LandAnimal) {
  constructor(props) {
    super(props);
  }

  introduce() {
    return `I am a lion. ${super.introduce()}. ${super.run()}`;
  }
}

class Shark extends Carnivore(WaterAnimal) {
  constructor(props) {
    super(props);
  }

  introduce() {
    return `I am a shark. ${super.introduce()}. ${super.swim()}`;
  }
}

class Eagle extends Carnivore(AirAnimal) {
  constructor(props) {
    super(props);
  }
  introduce() {
    return `I am an eagle. ${super.introduce()}. ${super.fly()}`;
  }
}

const handleButtonClick = () => {
  const options = document.getElementById("typeList");
  const value = options.value;

  const props = {
    name: document.getElementById("name").value,
    sound: document.getElementById("sound").value,
    color: document.getElementById("color").value,
    swimDepth: document.getElementById("swimDepth").value,
    speed: document.getElementById("speed").value,
  };
  let animal;
  if (value === "lion") {
    animal = new Lion(props);
  } else if (value === "shark") {
    animal = new Shark(props);
  } else if (value === "eagle") {
    animal = new Eagle(props);
  }

  const list = document.getElementById(`${value}List`);
  const entry = document.createElement("li");
  entry.appendChild(document.createTextNode(animal.introduce()));
  list.appendChild(entry);
};
