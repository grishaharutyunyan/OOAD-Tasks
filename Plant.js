const LivingBeing = require('./LivingBeing');

class Plant extends LivingBeing {
  constructor(name) {
    super(name);
  }

  live() {
    console.log(`${this.name} is growing.`);
  }

  photosynthesize() {
    console.log(`${this.name} is performing photosynthesis.`);
  }
}

module.exports = Plant;
