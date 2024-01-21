const fs = require('fs');
const Plant = require('./Plant');
const Animal = require('./Animal');
const Environment = require('./Environment');


fs.readFile('creatures.json',  (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const creaturesData = JSON.parse(data);

  
  const creatures = creaturesData.map(creature => {
    if (creature.type === 'Plant') {
      return new Plant(creature.name);
    } else if (creature.type === 'Animal') {
      return new Animal(creature.name);
    }
  });

  
  const forest = new Environment();
  creatures.forEach(creature => forest.addEntity(creature));

  
  const simulationResults = [];
  forest.entities.forEach(entity => {
    const isPlant = entity.constructor === Plant;
    const action = isPlant ? 'is growing.' : 'is breathing and moving.';
    simulationResults.push(`${entity.name} (${isPlant ? 'Plant' : 'Animal'}) ${action}`);
    
    
    if (isPlant) {
      simulationResults.push(`${entity.name} (${isPlant ? 'Plant' : 'Animal'}) is performing photosynthesis.`);
    }
  });

 
  const entityActions = simulationResults.join('\n');
  fs.writeFile('simulation_results.txt', entityActions,  (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("Simulation results written to simulation_results.txt");
    }
  });
});

