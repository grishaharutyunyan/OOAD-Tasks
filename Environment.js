class Environment {
    constructor() {
      this.entities = [];
    }
  
    addEntity(entity) {
      this.entities.push(entity);
    }
  
    simulateLife() {
      console.log("Simulating life in the environment:");
      this.entities.forEach(entity => {
        entity.live();
      });
    }
  }
  
  module.exports = Environment;
  