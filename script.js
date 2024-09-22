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
