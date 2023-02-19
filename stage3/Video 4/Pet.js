class Pet {
  constructor(animal, age, breed) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
  }
}

const rose = new Pet('dog', 10, 'boxer');
const jax = new Pet('dog', 2, 'labradoodle');
const belle = new Pet('dog', 1, 'labradoodle');

console.log(rose);