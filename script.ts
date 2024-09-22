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