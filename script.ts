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
