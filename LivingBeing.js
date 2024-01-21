class LivingBeing {
    constructor(name) {
      this.name = name;
    }
  
    live() {
      throw new Error("live() method must be implemented");
    }
  }
  
  module.exports = LivingBeing;
  