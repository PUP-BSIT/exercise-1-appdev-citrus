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
        console.log(`I want a cat, that is color ${this.color}, with a lifespan 
                    of ${this.lifespan}, and a ${this.gender}. \n Cat's are 
                    part of a ${this.animal} group and they can help us with 
                    stress that boost our mental health.`);
    }
};

const goldfish: Pets = {
    animal: Animals.FISH,
    color: "golden",
    lifespan: "1 year",
    gender: "female",
    print() {
        console.log(`When I was a kid, I have a ${this.animal}
                    that's a goldfish, it has color of ${this.color}
                    it lived around for almost ${this.lifespan}.
                    I think it's a ${this.gender}.`);
    }
};

const turtle: Pets = {
    animal: Animals.REPTILE,
    color: "brown",
    lifespan: "20-30 years",
    gender: "female",
    print() {
        console.log(`My friend has a turtle that is ${this.color} in color
                    and is a ${this.gender}. As a ${this.animal},
                    she is known for her calm demeanor. Her turtle has a
                    lifespan of ${this.lifespan} according to her mom.`);
    },
};

