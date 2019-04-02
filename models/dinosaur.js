const Dinosaur = function (species, diet, guestsAttractedPerDay) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
}

Dinosaur.prototype.pretty = function(){
  let maximum = [];

  for (perDino of this.guestsAttractedPerDay){
    maximum.push(perDino)
  }
  return Math.max(maximum)
  };


module.exports = Dinosaur;
