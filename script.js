
class Animal {
    constructor(species) {
        this._species = species; // Use a private property convention
    }

    get species() {
        return this._species; // Getter for species
    }

    makeSound() {
        console.log(`The ${this.species} makes a sound`); // Log the sound
    }
}

class Cat extends Animal {
    constructor(species) {
        super(species); // Call the parent constructor
    }

    purr() {
        console.log("purr"); // Log the purring sound
    }
}

class Dog extends Animal {
    constructor(species) {
        super(species); // Call the parent constructor
    }

    bark() {
        console.log("woof"); // Log the barking sound
    }
}



// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
