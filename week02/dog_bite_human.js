class Dog {
  constructor(name, bite) {
      this.name = name;
      this.bite = bite;
  }
}

class Human {
  constructor(name, health) {
      this.name = name;
      this.health = health;
  }
  hurt(dog) {
    if(dog.bite > 0) {
      this.health -= dog.bite;
      console.log(dog.name + ' hurt ' + this.name + ', human health ' + this.health);
    } else {
      console.log(dog.name, ' can not hurt ', this.name)
    }
  }
}

A = new Dog('dog')
B = new Human('Human')

B.hurt(A)
