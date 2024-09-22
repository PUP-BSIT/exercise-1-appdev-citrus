var Animals;
(function (Animals) {
    Animals["MAMMALS"] = "Mammal";
    Animals["BIRDS"] = "Bird";
    Animals["FISH"] = "Fish";
    Animals["AMPHIBIAN"] = "Amphibian";
    Animals["REPTILE"] = "Reptile";
})(Animals || (Animals = {}));
var cat = {
    animal: Animals.MAMMALS,
    color: "white",
    lifespan: "10 years",
    gender: "female",
    print: function () {
        console.log("I want a cat, that is color ".concat(this.color, ", with a lifespan \n                    of ").concat(this.lifespan, ", and a ").concat(this.gender, ". \n Cat's are \n                    part of a ").concat(this.animal, " group and they can help us with \n                    stress that boost our mental health."));
    }
};
var goldfish = {
    animal: Animals.FISH,
    color: "golden",
    lifespan: "1 year",
    gender: "female",
    print: function () {
        console.log("When I was a kid, I have a ".concat(this.animal, "\n                    that's a goldfish, it has color of ").concat(this.color, "\n                    it lived around for almost ").concat(this.lifespan, ".\n                    I think it's a ").concat(this.gender, "."));
    }
};
var turtle = {
    animal: Animals.REPTILE,
    color: "brown",
    lifespan: "20-30 years",
    gender: "female",
    print: function () {
        console.log("My friend has a turtle that is ".concat(this.color, " in color\n                    and is a ").concat(this.gender, ". As a ").concat(this.animal, ",\n                    she is known for her calm demeanor. Her turtle has a\n                    lifespan of ").concat(this.lifespan, " according to her mom."));
    },
};
var axolotl = {
    animal: Animals.AMPHIBIAN,
    color: "white",
    lifespan: "6 years",
    gender: "female",
    print: function () {
        console.log("I have a".concat(this.gender, " ").concat(this.color, " Axolotl, \n            with a lifespan of ").concat(this.lifespan, ".\n            She is classified as ").concat(this.animal, "."));
    }
};
var snowyOwl = {
    animal: Animals.BIRDS,
    color: "white",
    lifespan: "10-12 years",
    gender: "male",
    print: function () {
        console.log("In my whole life, I have never had a pet that is a ".concat(this.animal, ". ") +
            "If I could have one, I would like to have a snowy owl " +
            "that has a color of ".concat(this.color, " and is a ").concat(this.gender, ". ") +
            "Even when it's old, it would still be white. " +
            "Snowy owls have an incredible lifespan of up to ".concat(this.lifespan, ", ") +
            "which is amazing! I can grow old with him.");
    },
};
cat.print();
axolotl.print();
goldfish.print();
turtle.print();
