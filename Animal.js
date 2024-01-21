const LivingBeing = require('./LivingBeing');

class Animal extends LivingBeing {
  constructor(name) {
    super(name);
  }

  live() {
    console.log(`${this.name} is breathing and moving.`);
  }

  eat(food) {
    console.log(`${this.name} is eating ${food}.`);
  }
}

module.exports = Animal;
