enum Animals {
    MAMMALS = "Mammal",
    BIRDS = "Bird",
    FISH = "Fish",
    AMPHIBIAN = "Amphibian",
    REPTILE = "Reptile"
}

type Pets = {
    animal: Animals;
    color: string;
    lifespan: string;
    gender: string;
    print(): void;
}

const cat: Pets = {
  animal: Animals.MAMMALS,
  color: "white",
  lifespan: "10 years",
  gender: "female",
  print() {
    console.log(`I want a cat, that is color ${this.color}, with a lifespan of
         ${this.lifespan}, ` + `and a ${this.gender}. \nCat's are part of the 
         ${this.animal} group ` + `and they can help us with stress, boosting 
         our mental health.`);
  },
};

const goldfish: Pets = {
  animal: Animals.FISH,
  color: "golden",
  lifespan: "1 year",
  gender: "female",
  print() {
    console.log(`When I was a kid, I had a ${this.animal} that's a goldfish. It 
         had a color of ${this.color}, ` + `and lived for around ${this.lifespan}
         . I think it was a ${this.gender}.`);
  },
};

const turtle: Pets = {
  animal: Animals.REPTILE,
  color: "brown",
  lifespan: "20-30 years",
  gender: "female",
  print() {
    console.log(`My friend has a turtle that is ${this.color} in color and is a
         ${this.gender}. ` + `As a ${this.animal}, she is known for her calm 
         demeanor. Her turtle has a lifespan of ` + `${this.lifespan}, according
         to her mom.`);
  },
};

const axolotl: Pets = {
  animal: Animals.AMPHIBIAN,
  color: "white",
  lifespan: "6 years",
  gender: "female",
  print() {
    console.log(`I have a ${this.gender} ${this.color} Axolotl, with a lifespan 
         of ${this.lifespan}. ` + `She is classified as an ${this.animal}.`);
  },
};


const snowyOwl: Pets = {
  animal: Animals.BIRDS,
  color: "white",
  lifespan: "10-12 years",
  gender: "male",
  print() {
    console.log(`In my whole life, I have never had a pet that is a 
         ${this.animal}. ` + `If I could have one, I would like to have a snowy
         owl ` + `that has a color of ${this.color} and is a ${this.gender}. ` +
        `Even when it's old, it would still be white. ` + `Snowy owls have an 
         incredible lifespan of up to ${this.lifespan}, ` + `which is amazing! 
         I can grow old with him.`);
  },
};

cat.print();
axolotl.print();
goldfish.print();
turtle.print();
snowyOwl.print();