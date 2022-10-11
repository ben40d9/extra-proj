// DEFINE CLASS - this is like when you define a function.
class Animal {
  type = '';
  color = '';
  species = 'unknown';
  name = 'john doe';

  constructor({ type, color, species, name }) {
    this.type = type;
    this.color = color;
    this.species = species;
    this.name = name;
  }

  sayName() {
    console.log(this.name);
    return this.name;
  }
}


const animal_1 = new Animal({
  type: 'dog',
  color: 'brown',
  species: 'browhn',
  name: 'rebel'
});

animal_1.sayName();



// extend
class Dog extends Animal {
  type = '';
  color = '';
  species = 'unknown';
  name = 'john doe';
  breed = '';
  owner = '';

  constructor(
    type,
    color,
    species,
    name,
    breed,
    owner,
  ) {
    super(type, color, species, name);
    this.breed = breed;
    this.owner = owner;
  }

  bark() {
    console.log('WOOF BARK');
    return
  }
}


const spot = new Dog({
  type: 'dog';
  color: 'white';
  species: 'something latin',
  name: 'spot',
  breed: 'german shep',
  owner: 'joe',
});


